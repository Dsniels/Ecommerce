export const initialState = {
    usuario: {
        Direccion : '',
        date : '',
        email : '',
        lastname : "",
        name : '',
        role : '',
        _id : ''
    },
    autenticado: false
};



const sesionUsuarioReducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case 'INICIAR_SESION':
            return {
                ...state,
                usuario : action.sesion,
                autenticado : action.autenticado
            };
        
        case 'SALIR_SESION' : 
            return {
                ...state,
                usuario : action.nuevoUsuario,
                autenticado : action.autenticado
            };
            
        case 'ACTUALIZAR_USUARIO':
            return {
                ...state,
                usuario : action.nuevoUsuario,
                autenticado : action.autenticado
            };
        default: return state;
    };
};

export default sesionUsuarioReducer;