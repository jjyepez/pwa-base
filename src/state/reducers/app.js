
function app( state = {}, action ){
    switch( action.type ){
        case 'CHANGE_CURRENT_CONTEXT': {
console.log( 'cambiando Context', state, action )
            return { ...state, ...action.payload.app }
        }
        default:
            return state
    }
}

export default app