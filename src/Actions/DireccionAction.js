import HttpCliente from '../Servicios/HttpCliente'
import axios from 'axios'

export const setDireccionUsuario = (direccion, dispatch) =>{
    return new Promise((resolve, reject)=>{
        HttpCliente.put('/api/direccion/actualizarDireccion', direccion).then(response => {
            dispatch({
                type : 'SET_DIRECCION',
                sesion : response.data
            })
            resolve(response)
        }).catch(error => console.log(error))
    })
}

export const getDireccion = (dispatch) => {
    console.log("🚀 ~ getDireccion ~ dispatch:", dispatch)
    return new Promise((resolve, reject) => {
        HttpCliente.get('/api/direccion/').then(response => {
            dispatch({
                type : 'SET_DIRECCION',
                session : response.data
            })
            resolve(response);
        }).catch(error => {
            resolve(error);
        })
    })
}