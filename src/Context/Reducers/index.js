//import SesionCarritoReducer from "./sesionCarritoReducer";
import SesionUsuarioReducer from "./sesionUsuarioReducer";

export const mainReducer = ({ sesionUsuario }, action) => {
  return {
    //  sesionCarrito: SesionCarritoReducer(SesionCarrito, action),
    sesionUsuario: SesionUsuarioReducer(sesionUsuario, action),
  };
};
