import {
  Box,
  FormControl,
  Grid,
  Heading,
  TextInput,
} from "@primer/react-brand";
import { Button, Grommet } from "grommet";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import useStyles from "../../Themes/useStyles";
import { useStateValue } from "../../Context/store";
import { LoginUsuario, googleAuth } from "../../Actions/UsuarioAction";

export default function Login(props) {
  const kindButtonTheme = {
    global: {
      colors: {
        brand: "#2da44e",
        "brand-contrast": "#2999AD",
        active: "#4ac26b",
      },
      font: { family: "Arial" },
    },
    button: {
      default: {
        color: "text",
        border: undefined,
        padding: {
          horizontal: "12px",
          vertical: "8px",
        },
      },
      primary: {
        background: { color: "brand" },
        border: undefined,
        color: "text-strong",
        font: { weight: "bold" },
        padding: {
          horizontal: "12px",
          vertical: "8px",
        },
      },
      secondary: {
        border: { color: "brand", width: "3px" },
        color: "white",
        padding: {
          horizontal: "8px",
          vertical: "4px",
        },
      },
      active: {
        background: { color: "brand-contrast" },
        color: "white",
        secondary: {
          background: "none",
          border: {
            color: "brand-contrast",
          },
        },
      },
      disabled: {
        opacity: 0.3,
        secondary: {
          border: { color: "text-weak" },
        },
      },
      hover: {
        background: { color: "active" },
        secondary: {
          border: { color: "active" },
        },
      },
    },
  };

  const [{ sesionUsuario }, dispatch] = useStateValue();

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loginGoogle = (e) => {
    e.preventDefault();
    window.open(`${process.env.REACT_APP_URL_BASE}/api/users/google/`, "_self");
  };

  const loginEventoUsuario = () => {
    console.log("dispatch", dispatch);

    LoginUsuario(usuario, dispatch).then((response) => {
      if (response.status === 200) {
        window.localStorage.setItem("token", response.data.token);
        props.history.push("/");
      } else {
        console.log("Error en el proceso de Login");
      }
    });
  };

  const classes = useStyles();
  return (
    <Box
      padding={{ narrow: "spacious", wide: "spacious", regular: "normal" }}
      style={{
        height: "100%",
        width: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ borderRadius: 20, backgroundColor: "#1f2328", padding: 20 }}
      >
        <Box>
          <Heading
            style={{
              textAlign: "center",
              color: "#f6f8fa",
              paddingBottom: "30px",
              paddingTop: "40px",
            }}
          >
            Iniciar Sesion
          </Heading>
        </Box>
        <Grid
          style={{ borderRadius: 30, padding: 20, backgroundColor: "#24292e" }}
          fullWidth
        >
          <Grid.Column
            style={{ paddingTop: 30 }}
            start={{ xsmall: 2, small: 2, xlarge: 2, large: 2 }}
            span={{ small: 10, xsmall: 10, medium: 8, large: 8, xlarge: 10 }}
          >
            <FormControl fullWidth>
              <TextInput
                invisible
                placeholder="Correo"
                name="email"
                value={usuario.email}
                onChange={handleChange}
              />
            </FormControl>
          </Grid.Column>
          <Grid.Column
            start={{ xsmall: 2, small: 2, xlarge: 2, large: 2 }}
            span={{ small: 10, xsmall: 10, medium: 8, large: 8, xlarge: 10 }}
          >
            <FormControl fullWidth>
              <TextInput
                invisible
                placeholder="Contraseña"
                name="password"
                value={usuario.password}
                onChange={handleChange}
              />
            </FormControl>
          </Grid.Column>
          <Grid.Column
            start={{ xsmall: 2, small: 2, xlarge: 2, large: 2 }}
            span={{ small: 10, xsmall: 10, medium: 8, large: 8, xlarge: 10 }}
          >
            <Grommet theme={kindButtonTheme}>
              <Box
                style={{
                  justifyContent: "center",
                  display: "grid",
                  flexWrap: "wrap",
                  marginTop: 20,
                }}
              >
                <Button
                  style={{
                    marginBottom: 20,
                    color: "#f6f8fa",
                    ":active": { color: "white" },
                  }}
                  label="Iniciar Sesion"
                  primary
                  onClick={loginEventoUsuario}
                />
                <Button
                  style={{
                    marginBottom: 20,
                    color: "#f6f8fa",
                    ":active": { color: "white" },
                  }}
                  label="Iniciar Sesion con google"
                  primary
                  onClick={loginGoogle}
                />
                <Link to="login" variant="body1" className={classes.link}>
                  ¿No tienes una Cuenta?
                </Link>
              </Box>
            </Grommet>
          </Grid.Column>
        </Grid>
      </form>
    </Box>
  );
}
