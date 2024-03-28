
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from './Navegacion/Menubar';
import {theme} from '@primer/react';
import {ThemeProvider as PrimerThemeProvider} from '@primer/react';
import { ThemeProvider as PrimerBrandThemeProvider } from '@primer/react-brand';
import Inicio from './Pantallas/Inicio';
import '@primer/react-brand/lib/css/main.css'
import Tienda from './Pantallas/Tienda';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Detalles from './Pantallas/Detalles';
import Perfil from './Pantallas/Seguridad/Perfil';
import { Grommet } from 'grommet';
import Registro from './Pantallas/Seguridad/Registro';
import Login from './Pantallas/Seguridad/Login';


function App() {
  const themeGrommet = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

  return (
    <PrimerThemeProvider colorMode='dark' theme={theme} >
 
      <PrimerBrandThemeProvider style={{
      backgroundColor: 'var(--brand-color-canvas-default)',
    }} colorMode='dark'>
        <Router>
          <MenuBar />
          <Switch>
            <Route exact path="/Inicio" component={Inicio} /> 
            <Route exact path="/Tienda" component={Tienda}/>  
            <Route exact path="/Detalles" component={Detalles}/> 
            <Route exact path="/Perfil" component={Perfil} />
               <Route exact path="/Registro" component={Registro} />
               <Route exact path="/Login" component={Login} />

             
            <Redirect from="/" to="/Inicio" />     
          </Switch>
        </Router>

      </PrimerBrandThemeProvider>



    </PrimerThemeProvider>

  );
}

export default App;
