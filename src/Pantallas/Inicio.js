import React, { useEffect } from "react";
import {
  Button,
  CTABanner,
  Heading,
  Image,
  River,
  Stack,
  Text,
} from "@primer/react-brand";
import useStyles from "../Themes/useStyles";
import { Box } from "@primer/react";
import { useStateValue } from "../Context/store";
import { googleAuth } from "../Actions/UsuarioAction";
import { TrackChangesOutlined } from "@material-ui/icons";
import { useState } from "react";

const Inicio = (props) => {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const [servidorResponse, setServidorResponse] = useState(false);
  useEffect(() => {
    const getuser = async () => {
      fetch("http://localhost:8080/api/users/login/done", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Controll-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Application failed");
        })
        .then((res) => {
          dispatch({
            type: "INICIAR_SESION",
            sesion: res.user,
            autenticado: true,
          });
          window.localStorage.setItem("token", res.user.token);
        });
    };
    if (!servidorResponse) {
      getuser();
      setServidorResponse(true);
    }
  }, [servidorResponse]);

  const classes = useStyles();

  const tienda = () => {
    props.history.push("/Tienda");
  };
  return (
    <>
      <Stack
        style={{ display: "flex", justifyContent: "center" }}
        direction="vertical"
        padding="spacious"
      >
        <section style={{ marginTop: 0, padding: 3 }}>
          <Box
            className={classes.containermt}
            style={{
              width: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CTABanner hasBorder>
              <CTABanner.Heading>Tienda en linea</CTABanner.Heading>
              <CTABanner.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                sapien sit ullamcorper id. Aliquam luctus sed turpis felis nam
                pulvinar risus elementum.
              </CTABanner.Description>
              <CTABanner.ButtonGroup>
                <Button onClick={tienda}>Tienda</Button>
              </CTABanner.ButtonGroup>
            </CTABanner>
          </Box>
        </section>

        <Box style={{ padding: 50, display: "flex", justifyContent: "center" }}>
          <River imageTextRatio="60:40">
            <River.Visual hasShadow={false}>
              <Image
                src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                alt="placeholder, blank area with an gray background color"
                aspectRatio="16:9"
              />
            </River.Visual>
            <River.Content>
              <Heading>Producto nuevo</Heading>
              <Text>das asdkn uiebd ajsbda ubvc as dsald</Text>
            </River.Content>
          </River>
        </Box>
      </Stack>
    </>
  );
};
export default Inicio;
