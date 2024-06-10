//import SesionCarritoReducer from "./sesionCarritoReducer";
import SesionCarritoReducer from "./sesionCarritoReducer";
import SesionDireccionReducer from "./sesionDireccionReducer";
import SesionUsuarioReducer from "./sesionUsuarioReducer";

export const mainReducer = ({ sesionUsuario, sesionCarrito, sesionDireccion }, action) => {

  
  return {
    sesionDireccion: SesionDireccionReducer(sesionDireccion, action),
    sesionCarrito: SesionCarritoReducer(sesionCarrito, action),
    sesionUsuario: SesionUsuarioReducer(sesionUsuario, action),
  };
};
