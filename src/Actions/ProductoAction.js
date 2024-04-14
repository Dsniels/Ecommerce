import axios from 'axios';
import httpCliente from '../Servicios/HttpCliente';


export const getProductos = (request) => {
    return new Promise((resolve, reject) => {
        httpCliente.get(`/api/Producto?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`)
                    .then(response => {
                        resolve(response);
                    });
    })
};

export const getProducto = (id) => {
    return new Promise( (resolve,reject) =>{
        httpCliente.get(`/api/Producto/${id}`)
                .then(response => {
                    resolve(response);
                }).catch( error => {
                    resolve(error.response);
                } );
    } );
}

