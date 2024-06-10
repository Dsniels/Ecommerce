export const initialState = {
    direccion : {
        _id : '',
        Estado : '',
        Ciudad : '',
        CodigoPostal : '',
        Colonia : '',
        Pais : '',
        User : "",
        __v:''
    }
}
 
const SesionDireccionReducer = (state = initialState, action) => {
    console.log("🚀 ~ SesionDireccionReducer ~ action:", action)

    switch(action.type){
        case'SET_DIRECCION':
            return{
                ...state,
                direccion : action.session
            };
        default : return state
    }
}

export default SesionDireccionReducer;