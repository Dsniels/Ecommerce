import HttpCliente from '../Servicios/HttpCliente';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const getUsuarios = (request) =>{
    return new Promise( (resolve, eject) => {
        HttpCliente.get(`/api/users/all?page=${request.page}&pageSize=${request.pageSize}`)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        resolve(error);
                    });
    } );
}

export const getUsuarioByID = (id) => { 
    return new Promise( (resolve, eject) => {
        HttpCliente.get(`/api/users/${id}`)
                    .then(response =>{
                        resolve(response);
                    })
                    .catch(error => {
                        resolve(error)
                    })
    } )
}
export const registrarUsuario = (usuario, dispatch) =>{
    return new Promise ((resolve, eject) =>{
        instancia.post("/api/users/registrarse", usuario).then(response => {
            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })
            
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })
    });
}


export const logOut = () => {
    return new Promise((resolve, eject) => {
        HttpCliente.get('/api/users/logout').then(response => {
            resolve(response)
        }).catch(err => {
            resolve(err)
        })
    })
}

export const LoginUsuario = (usuario, dispatch) =>{
    return new Promise((resolve, eject) => {
        instancia.post("/api/users/login",usuario).then(response => {
            console.log('login funcion',response.data)
            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })
            console.log('Dispatch en funcion LoginUsuario:', dispatch)
            resolve(response);
        })
        .catch((error) => {
            resolve(error.response);
        })

    });

}

export const GetUsuario = (dispatch) =>{
    return new Promise((resolve, eject) => {
        HttpCliente.get("/api/usuario").then(response =>{
            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })
            
            
            resolve(response);



        })
        .catch(error => {
            resolve(error.response);
        })
    });

}





export const googleAuth = (dispatch) =>{
    return new Promise((resolve, eject) => {
        instancia.get(`/api/users/done`).then(response =>{
            console.log('auth google', response.data);
            dispatch({
                type : 'INICIAR_SESION',
                sesion : response.data,
                autenticado:true
            })
            resolve(response);
        }).catch(error => { 
            resolve(error);
        })
    })
}