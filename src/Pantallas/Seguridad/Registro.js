import {
  Box,
  FormControl,
  Grid,
  Heading,
  TextInput,
} from "@primer/react-brand";
import { Button, Grommet } from "grommet";
import React from "react";
import useStyles from "../../Themes/useStyles";
import { Link } from "react-router-dom";

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
  const classes = useStyles();
  return (
<Box padding={{narrow:'spacious', wide:'spacious', regular:'normal'}} style={{height:'100%',width:'auto', display:'flex', justifyContent:'center'}}>
    <form style={{borderRadius:20,backgroundColor:'#1f2328', padding:20}}>
        <Box>
            <Heading style={{textAlign:'center',color:'#f6f8fa', paddingBottom:'50px', paddingTop:'40px'}}>Crea una Cuenta</Heading>
        </Box>
      <Grid  style={{paddingTop:50,borderRadius:30,padding:20,backgroundColor:'#21262d'}} fullWidth >

            <Grid.Column  start={{xsmall:2,small:2, xlarge:2, large:2}} span={{small:2, xsmall:10, medium:2, large:2, xlarge:5 }}>
              <FormControl   fullWidth>
                      <TextInput invisible placeholder="Nombre" />
              </FormControl>
            </Grid.Column>
            <Grid.Column start={{xsmall:2,small:2 }} span={{small:10, xsmall:10, medium:10, large:5, xlarge:5 }}>
                  <FormControl fullWidth>
                    <TextInput invisible placeholder="Apellido" />
                  </FormControl> 
            </Grid.Column>
            <Grid.Column start={{xsmall:2,small:2, xlarge:2 , large:2 }} span={{small:10, xsmall:10, medium:8, large:8, xlarge:10 }}>
                <FormControl fullWidth  >
                  <TextInput invisible placeholder="Username" />
                </FormControl>
            </Grid.Column>
            <Grid.Column start={{xsmall:2,small:2, xlarge:2 , large:2 }} span={{small:10, xsmall:10, medium:8, large:8, xlarge:10 }}>
                <FormControl fullWidth  >
                  <TextInput invisible placeholder="Correo" />
                </FormControl>
            </Grid.Column>
            <Grid.Column start={{xsmall:2,small:2, xlarge:2 , large:2 }} span={{small:10, xsmall:10, medium:8, large:8, xlarge:10 }}>
                <FormControl fullWidth  >
                  <TextInput conr invisible placeholder="Contraseña" />
                </FormControl>
            </Grid.Column>
            <Grid.Column start={{xsmall:2,small:2, xlarge:2 , large:2 }} span={{small:10, xsmall:10, medium:8, large:8, xlarge:10 }}>
              <Grommet theme={kindButtonTheme}>
              <Box
                style={{
                  justifyContent: "center",
                  display: "grid",
                  flexWrap: 'wrap',
                  marginTop: 20,
                }}
              >
                <Button
                  style={{marginBottom:20 ,color: "#f6f8fa", ":active": { color: "white" } }}
                  label="Registrarse"
                  primary
                />
                <Link to="login" variant='body1' className={classes.link} >¿Ya tienes una Cuenta?</Link>
              </Box>
            </Grommet>

            


            </Grid.Column>
            
      </Grid>
      
    </form>
    
</Box>






/* <Box  style={{width: 'auto', display: "flex", justifyContent: "center" }}  >
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
</Box> */
  );
}
