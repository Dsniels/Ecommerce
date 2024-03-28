import {
  Box,
  FormControl,
  Heading,
  Stack,
  TextInput,
} from "@primer/react-brand";
import { Button, Grommet } from "grommet";
import React from "react";
import useStyles from "../../Themes/useStyles";

export default function Registro() {
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
  return (
<Box  style={{width: 'auto', display: "flex", justifyContent: "center" }}  >
    <Box style={{  display: "flex", justifyContent: "center" }} >
      <Stack
      style={{ backgroundColor: "#24292e",borderRadius: "10px" }}
        className={useStyles().FormControl}
      >
        <Box style={{ width:'auto' , padding:10}}>
          <Heading
            as="h3"
            color="white"
            style={{ textAlign: "center", paddingBottom: "50px" }}
          >
            Crear Cuenta
          </Heading>

          <form  >
            <Box
              style={{
                alignItems: "center",
                paddingBottom: 3,
                margin:'auto',
                width:'90%',
                flexWrap: 'wrap',
                maxWidth: '1200px',

                
              }} 
            >
              <Box
                style={{
                  display: "grid",
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gridTemplateRows: '1, 2fr',
                    rowGap:10,
                  gap: 10,
                }}
              >
                  <FormControl fullWidth>
                    <TextInput placeholder="Nombre" />
                  </FormControl>
                <FormControl fullWidth>
                  <TextInput placeholder="Apellido" />
                </FormControl> 


              </Box>
                <FormControl fullWidth  >
                <TextInput placeholder="Username" />
              </FormControl>
              <FormControl fullWidth>
                <TextInput placeholder="correo" />
              </FormControl>
              <FormControl fullWidth>
                <TextInput placeholder="Contraseña" />
              </FormControl>

                
               

            </Box>
          </form>
          <Grommet theme={kindButtonTheme}>
            <Box
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: 20,
              }}
            >
              <Button
                style={{ color: "#f6f8fa", ":active": { color: "white" } }}
                label="Registrarse"
                primary
              />
            </Box>
          </Grommet>
        </Box>
      </Stack>
    </Box>
</Box>
  );
}
