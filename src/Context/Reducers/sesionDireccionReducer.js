export const initialState = {
    direccion : {
        _id : '',
        Estado : '',
        Ciudad : '',
        CodigoPostal : '',
        Colonia : '',
        Pais : '',
        User : "",
    }
}

const SesionDireccionReducer = (state = initialState, action) =>{

    switch(action.type){
        case'SET_DIRECCION':
            return{
                ...state,
                direccion : action.sesion
            };
        default : return state
    }
}

export default SesionDireccionReducer;