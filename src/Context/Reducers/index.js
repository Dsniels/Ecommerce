import SesionCarritoReducer from "./sesionCarritoReducer";

export const mainReducer = ({ SesionCarrito }, action) => {
  return {
    SesionCarrito: SesionCarritoReducer(SesionCarrito, action),
  };
};
