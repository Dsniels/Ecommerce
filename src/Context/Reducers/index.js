//import SesionCarritoReducer from "./sesionCarritoReducer";
import SesionCarritoReducer from "./sesionCarritoReducer";
import SesionDireccionReducer from "./sesionDireccionReducer";
import SesionUsuarioReducer from "./sesionUsuarioReducer";

export const mainReducer = ({ sesionUsuario, sesionCarrito, sesionDireccion }, action) => {
  console.log("🚀 ~ mainReducer ~ sesionDireccion:", sesionDireccion)
  console.log("🚀 ~ mainReducer ~ sesionUsuario:", sesionUsuario)
  
  return {
    sesionDireccion: SesionDireccionReducer(sesionDireccion, action),
    sesionCarrito: SesionCarritoReducer(sesionCarrito, action),
    sesionUsuario: SesionUsuarioReducer(sesionUsuario, action),
  };
};
