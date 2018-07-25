
function records( state = {}, action ){
    switch( action.type ){
        case 'SET_RECORDS_FROM_API': {
console.log( 'cargando Records', state, action )
            return { ...state, ...action.payload }
        }
        default:
            return state
    }
}

export default records