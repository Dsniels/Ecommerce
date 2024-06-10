import HttpCliente from "../Servicios/HttpCliente";
import axios from "axios";

export const createOrden = (carrito) => {
  return new Promise((resolve, eject) => {
    HttpCliente.post("/api/ordenes/crearorden", carrito)
      .then((response) => {
        console.log(typeof response);
        resolve(response.data.id);
      })
      .catch((err) => console.log(err));
  });
};
