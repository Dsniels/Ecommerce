import { Octicon, PageLayout, Timeline } from "@primer/react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Heading,
  Image,
  Stack,
  TextInput,
} from "@primer/react-brand";
import React, { useEffect, useState } from "react";
import { GitCommitIcon } from "@primer/octicons-react";
import { useStateValue } from "../../Context/store";

const Perfil = () => {
  const [{ sesionUsuario }, dispatch] = useStateValue();

  const [usuario, setUsuario] = useState({
    _id: "",
    name: "",
    password: "",
    image: "",
    email: "",
    imagenTemporal: "",
  });

  useEffect(()=> {
    if(sesionUsuario){
      setUsuario(sesionUsuario.usuario)
    }
  }, [sesionUsuario]);

  return (
    <PageLayout sx={{ height: "1080px" }} columnGap="30px" rowGap="30px">
      <PageLayout.Header>
        <Box
          style={{
            color: "whitesmoke",
            fontFamily: "revert-layer",
            fontSizeAdjust: 10,
            fontWeight: "bold",
            display: "flex",
            justifyContent: "start",
            "@media (max-width: 600px)": {
              // Consulta de medios para dispositivos móviles
              textAlign: "center", // Centrar el texto en dispositivos móviles
            },
            textAlign: "start",
            marginX: "auto",
            maxWidth: "80%",
          }}
        >
          <Heading
            as="h2"
            style={{
              marginLeft: "40px",
              fontSize: "5em",
              fontFamily: "monospace",
            }}
          >
            Perfil
          </Heading>
        </Box>
      </PageLayout.Header>
      <PageLayout.Pane
        position="start"
        divider="line"
        padding="normal"
        resizable={false}
        sx={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
          height: "auto",
        }}
        width="large"
      >
        <Box
          style={{
            width: ["300px", "200px"],
            height: "auto",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Stack direction="vertical">
            <Image
              style={{ borderRadius: "50%", width: 100, height: 100 }}
              src={
                usuario.image
                  ? usuario.image
                  : "https://avatars.githubusercontent.com/u/92997159?v=4"
              }
            />

            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <TextInput
                style={{ backgroundColor: "transparent" }}
                size="auto"
                value={usuario.name}
                disabled={true}
              />
              <FormControl.Label>Email</FormControl.Label>
              <TextInput
                style={{ backgroundColor: "transparent" }}
                size="large"
                value={usuario.email}
                type="email"
                disabled={true}
                ty
              />
              <FormControl.Label>Password</FormControl.Label>
              <TextInput
                style={{ backgroundColor: "transparent" }}
                size="large"
                value={usuario.password}
                type="password"
                disabled={true}
              />
              <ButtonGroup>
                <Button variant="primary">Editar</Button>
              </ButtonGroup>
            </FormControl>
          </Stack>
        </Box>
      </PageLayout.Pane>
      <PageLayout.Content
        width="medium"
        padding="none"
        sx={{
          gap: 4,
          marginX: "30px",
          minWidth: "300px",
          display: "inline-flex",
          height: "auto",
        }}
      >
        <Box style={{ width: "100%" }}>
          <Timeline>
            <Heading as="h5" style={{ margin: 10, paddingBottom: 20 }}>
              Mis pedidos
            </Heading>
            <Timeline.Item>
              <Timeline.Badge>
                <Octicon icon={GitCommitIcon} />
              </Timeline.Badge>
              <Timeline.Body>This is a message </Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge>
                <Octicon icon={GitCommitIcon} />
              </Timeline.Badge>
              <Timeline.Body>This is a message</Timeline.Body>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Badge>
                <Octicon icon={GitCommitIcon} />
              </Timeline.Badge>
              <Timeline.Body>This is a message</Timeline.Body>
            </Timeline.Item>
          </Timeline>
        </Box>
        {/*         <Box style={{ width: "300px", height: "400px" }}>
          <Stack direction="vertical">
            <Image
              style={{ borderRadius: "50%", width: 100, height: 100 }}
              src="https://avatars.githubusercontent.com/u/92997159?v=4"
            />

            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <TextInput
                style={{ backgroundColor: "transparent" }}
                size="auto"
                value="Daniel Salazar"
                disabled={true}
              />
              <FormControl.Label>Email</FormControl.Label>
              <TextInput
                style={{ backgroundColor: "transparent" }}
                size="large"
                value="daniel@outlook.com"
                type="email"
                disabled={true}
                ty
              />
              <FormControl.Label>Password</FormControl.Label>
              <TextInput
                style={{ backgroundColor: "transparent" }}
                size="large"
                value="********"
                type="password"
                disabled={true}
              />
              <ButtonGroup>
                <Button variant="primary">Editar</Button>
                <Button variant="subtle">Actualizar</Button>
              </ButtonGroup>
            </FormControl>
          </Stack>
        </Box> */}
      </PageLayout.Content>

      <PageLayout.Footer></PageLayout.Footer>
    </PageLayout>
  );
};

export default Perfil;
