//import SesionCarritoReducer from "./sesionCarritoReducer";
import SesionCarritoReducer from "./sesionCarritoReducer";
import SesionUsuarioReducer from "./sesionUsuarioReducer";

export const mainReducer = ({ sesionUsuario, sesionCarrito }, action) => {
  return {
    sesionCarrito: SesionCarritoReducer(sesionCarrito, action),
    sesionUsuario: SesionUsuarioReducer(sesionUsuario, action),
  };
};
