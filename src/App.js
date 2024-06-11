import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from "./Navegacion/Menubar";
import { theme } from "@primer/react";
import { ThemeProvider as PrimerThemeProvider } from "@primer/react";
import { ThemeProvider as PrimerBrandThemeProvider } from "@primer/react-brand";
import Inicio from "./Pantallas/Inicio";
import "@primer/react-brand/lib/css/main.css";
import Tienda from "./Pantallas/Tienda";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Detalles from "./Pantallas/Detalles";
import Perfil from "./Pantallas/Seguridad/Perfil";
import { ThemeProvider as ProviderMUI, createTheme } from "@material-ui/core";
import Registro from "./Pantallas/Seguridad/Registro";
import Login from "./Pantallas/Seguridad/Login";
import CarritoCompras from "./Pantallas/CarritoCompras";
import ProcesoCompra from "./Pantallas/ProcesoCompra";
import { useStateValue } from "./Context/store";
import { useEffect, useState } from "react";
import { GetUsuario } from "./Actions/UsuarioAction";
import { getCarrito } from "./Actions/CarritoActions";
import { v4 as uuidv4 } from "uuid";
import { getDireccion } from "./Actions/DireccionAction";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
function App() {
  const themeMui = createTheme({
    palette: {
      primary: {
        main: "#0f80aa",
      },
    },
  });
  const [{ sesionUsuario, sesionDireccion }, dispatch] = useStateValue();

  const [{ sesionCarrito }, carritoDispatch] = useStateValue();
  const [servidorResponse, setServidorResponse] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      let carritoId = window.localStorage.getItem("carrito");

      if (!carritoId) {
        carritoId = uuidv4();
        window.localStorage.setItem("carrito", carritoId);
      }

      if (!servidorResponse) {
        await GetUsuario(dispatch);
        await getCarrito(carritoDispatch, carritoId);
        setServidorResponse(true);
      }
      console.log("🚀 ~ App ~ sesionDireccion:", sesionDireccion);
    };

    fetchData();
  }, [servidorResponse, dispatch]);
  const initialOptions = {
    clientId: process.env.PAYPALID,
    currency: "MXN",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PrimerThemeProvider colorMode="dark" theme={theme}>
        <PrimerBrandThemeProvider
          style={{
            backgroundColor: "var(--brand-color-canvas-default)",
          }}
          colorMode="dark"
        >
          <Router>
            <MenuBar />

            <Switch>
              <Route exact path="/Inicio" component={Inicio} />
              <Route exact path="/Tienda" component={Tienda} />
              <Route exact path="/Detalles/:id" component={Detalles} />
              <Route exact path="/Perfil" component={Perfil} />
              <Route exact path="/Registro" component={Registro} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Carrito" component={CarritoCompras} />
              <Route exact path="/ProcesoCompra" component={ProcesoCompra} />
              <Redirect from="/" to="/Inicio" />
            </Switch>
          </Router>
        </PrimerBrandThemeProvider>
      </PrimerThemeProvider>
    </PayPalScriptProvider>
  );
}

export default App;
