import axios from "axios";
import httpCliente from "../Servicios/HttpCliente";

export const getProductos = (request) => {
  return new Promise((resolve, reject) => {
    httpCliente
      .get(
        `/api/productos?page=${request.pageIndex}&pageSize=${request.pageSize}`,
      )
      .then((response) => {
        console.log("response:", response);
        resolve(response);
      });
  });
};

export const getProducto = (id) => {
  return new Promise((resolve, reject) => {
    httpCliente
      .get(`/api/productos/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};
