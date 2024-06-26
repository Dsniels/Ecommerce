import HttpCliente from "../Servicios/HttpCliente";
import axios from "axios";

const instancia = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_URL_BASE,
});

instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const getUsuarios = (request) => {
  return new Promise((resolve, eject) => {
    HttpCliente.get(
      `/api/users/all?page=${request.page}&pageSize=${request.pageSize}`,
    )
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};

export const getUsuarioByID = (id) => {
  return new Promise((resolve, eject) => {
    HttpCliente.get(`/api/users/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
export const registrarUsuario = (usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("/api/users/registrarse", usuario)
      .then((response) => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data,
          autenticado: true,
        });

        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const logOut = () => {
  return new Promise((resolve, eject) => {
    HttpCliente.get("/api/users/logout")
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        resolve(err);
      });
  });
};

export const LoginUsuario = (usuario, dispatch) => {
  return new Promise((resolve, eject) => {
    instancia
      .post("/api/users/login", usuario)
      .then((response) => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data,
          autenticado: true,
        });
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const GetUsuario = (dispatch) => {
  return new Promise((resolve, eject) => {
    HttpCliente.get("/api/users/perfil")
      .then((response) => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data,
          autenticado: true,
        });
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const googleAuth = (dispatch) => {
  return new Promise((resolve, eject) => {
    instancia
      .get(`/api/users/login/done`, { withCredentials: true })
      .then((response) => {
        console.log("🚀 ~ .then ~ response:", response);
        dispatch({
          type: "INICIAR_SESION",
          sesion: response.data,
          autenticado: true,
        });
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        resolve(error);
      });
  });
};
