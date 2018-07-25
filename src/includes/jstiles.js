import './jstiles.css'

export default class jstiles {

  static inicializarTiles( selector, minWidth = 180 ){
    document.querySelector( selector ).classList.add('jstiles')
    window.addEventListener('resize', e => { this.resizeTiles( selector, minWidth ) } )
    this.resizeTiles( selector, minWidth )
  }
  
  static resizeTiles( selector, minWidth ){
    if( !window._glb ) window._glb = {}
    
    window._glb.minWidth  = minWidth
    const ww = window.innerWidth
    const n = ~~( ww / window._glb.minWidth ) || 1 // columnas visibles
    
    const $contenedor = document.querySelector( selector )
    
    // hace reorganizacion solo si ha cambiado el numero de columnas
    if( window._glb.nColumnas !== n ){
      
      const $contenidos = document.querySelectorAll(
        // se resguardan todos los contenidos antes de modificar el grid
        selector + '>*:not(.columna),' + selector + '>.columna>*:not(.columna)'
      )
      $contenedor.innerHTML=''
      
      for( var i = 1; i <= n; i++ ){
        const $col = document.createElement( 'div' )
              $col.classList.add( 'columna' )
        // --- se crea la nueva estructura de columnas
        $contenedor.appendChild( $col )
      }
      const $columnas = $contenedor.querySelectorAll( '.columna' )
      
      var j = 0, k = 0;
      $contenidos.forEach( nodo => {
        // --- se redistribuyen los contenidos
        const pos = nodo.getAttribute( 'data-pos' )
        // --- pos contiene la posicion ordenada del elemento
        if( !pos ){
          // --- si no la tiene se le asigna
          nodo.setAttribute( 'data-pos', k++ )
          // -- se añade el nodo a la siguiente columna
          $columnas[j].appendChild( nodo )
          // --- se debe mejorar, calculando la mejor columna en funcion del height utilizado hasta el momento
        } else {
          // --- se extrae el nodo en el orden correcto
          const $nodo = this.extraerNodo( $contenidos, 'data-pos', k++ )
          // -- se añade el nodo a la siguiente columna
          $columnas[j].appendChild( $nodo )
          // --- se debe mejorar, calculando la mejor columna en funcion del height utilizado hasta el momento
        }
        // --- se mueve a la siguiente columna
        j = j + 1 >= $columnas.length ? 0 : j + 1
      })
      window._glb.nColumnas = n // se guarda el n de cols actuales
    }
  }
  
  static extraerNodo( $arr, attr, val ){
    // este es el proceso mas pesado --- se puede optimizar
    var salida = null
    for( var i=0; i < $arr.length; i++ ){
      const el = $arr[ i ]
      // si el elemento es tiene el orden correcto
      if( el.getAttribute( attr ) === val ){ salida = el }
      if( salida ) break
    }
    return salida
  }

  /* la siguiente funcion no forma parte de la funcionalidad de masonry */
  static generarRandomTiles( selector, n = 20 ){
    if( !window._glb ) window._glb = {}
    window._glb.nColumnas = null
    const $contenedor = document.querySelector( selector )
          $contenedor.innerHTML = ''
    for(var i=0;i<n;i++){
      const $tile = document.createElement('div')
            $tile.classList.add('tile')
      const w = ~~(Math.random()*340)+100
      const h = ~~(Math.random()*340)+100
      $tile.innerHTML = `<img style='width:100%' src='https://source.unsplash.com/${w}x${h}'>`
      $contenedor.appendChild( $tile )
    }
  }

}