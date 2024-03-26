
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from './Navegacion/Menubar';
import {theme} from '@primer/react';
import {ThemeProvider as PrimerThemeProvider} from '@primer/react';
import { ThemeProvider as PrimerBrandThemeProvider } from '@primer/react-brand';
import Inicio from './Pantallas/Inicio';
import '@primer/react-brand/lib/css/main.css'
import Tienda from './Pantallas/Tienda';
import Detalles from './Pantallas/Detalles';



function App() {

  return (
    <PrimerThemeProvider colorMode='dark' theme={theme} >
 
      <PrimerBrandThemeProvider style={{
      backgroundColor: 'var(--brand-color-canvas-default)',
    }} colorMode='dark'>
        <Router>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Inicio} /> 
            <Route exact path="/Tienda" component={Tienda}/>  
            <Route exact path="Detalles" component={Detalles}/>      
          </Switch>
        </Router>

      </PrimerBrandThemeProvider>



    </PrimerThemeProvider>

  );
}

export default App;
