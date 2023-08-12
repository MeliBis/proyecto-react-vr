
export const JuegoReduces = (state=[], action) => {
    switch (action.type) {
        case 'crear':
            return [...state, action.payload]
            break;
        case 'borrar':
            return state.filter(juego=>juego.id !==action.payload)
            break;
    
        default:
            return state;
    }
}

