import React, { Component } from 'react'

import jstiles from '../../includes/jstiles'

class PageC extends Component {
    componentDidMount = () => {
        jstiles.generarRandomTiles( '.contenedor', 20 )
        jstiles.inicializarTiles( '.contenedor' )
    }
    render(){
        return (
            <div className = "contenedor" />
        )
    }
}

export default PageC