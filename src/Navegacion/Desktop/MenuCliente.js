import React from "react";
import useStyles from "../../Themes/useStyles";
import { ActionList, ActionMenu, Avatar, Octicon, } from "@primer/react";
import { PasteIcon, PersonIcon, SignInIcon, SignOutIcon } from "@primer/octicons-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Box } from "@primer/react-brand";
import { useStateValue } from "../../Context/store";


const MenuCliente = (props) => {

  const [{sesionUsuario}, dispatch] = useStateValue();



  const classes = useStyles();
  const history = useHistory();
  const perfil = () => {
    history.push('/Perfil');
  };
  const pedidos = () => {
    history.push("/Carrito");
  };
  const iniciarSesion = () => {
    history.push("/Login");
  };
  const registrarse = () => {
    history.push("/Registro");
  }

console.log('MENU CLIENTEEEE',sesionUsuario)

  const salirSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch({
      type : 'SALIR_SESION',
      nuevoUsuario : null,
      autenticado : false
    });

    history.push('/login');

  } 


  return (
    <Box>
      {/* ActionMenu */}
      <ActionMenu renderAnchor={null} >
        <ActionMenu.Button style={{ fontSize: 16, color: 'white', paddingLeft: 10, textAlign: 'center', display: 'flex', backgroundColor: 'transparent' }} variant="invisible">
          <Avatar size={50} className={classes.avatarPerfilAppBar} src="https://avatars.githubusercontent.com/u/92997159?v=4" />
          { sesionUsuario  ? (sesionUsuario.autenticado === true ? sesionUsuario.usuario.name + ' ' + sesionUsuario.usuario.lastname : "NO AUTENTICADO") : "no sesion" }
        </ActionMenu.Button>
        <ActionMenu.Overlay  align="center" side="outside-bottom">
          <ActionList style={{ display: 'flex' }} className={classes.ActionList}>
            <ActionList.Item onSelect={perfil} style={{ display: 'flex' }} className={classes.ActionListItems}>
              <ActionList.LeadingVisual>
                <Octicon className={classes.SelectIcon} size={30} icon={PersonIcon}></Octicon>
              </ActionList.LeadingVisual>
              Mi Perfil
            </ActionList.Item>
            <ActionList.Item onSelect={pedidos} className={classes.ActionListItems}>
              <ActionList.LeadingVisual>
                <Octicon icon={PasteIcon} size={30} className={classes.SelectIcon}></Octicon>
              </ActionList.LeadingVisual>
              Mis Pedidos
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item onSelect={salirSesion} variant="danger" className={classes.ActionListItems}>
              <ActionList.LeadingVisual>
                <Octicon icon={SignOutIcon} size={30} className={classes.SelectIcon}></Octicon>
              </ActionList.LeadingVisual>
              Cerrar Sesion
            </ActionList.Item>
            <ActionList.Item onSelect={iniciarSesion} className={classes.ActionListItems}>
              <ActionList.LeadingVisual>
                <Octicon icon={SignInIcon} size={30} className={classes.SelectIcon}></Octicon>
              </ActionList.LeadingVisual>
              Iniciar Sesion
            </ActionList.Item>
            <ActionList.Item onSelect={registrarse} className={classes.ActionListItems}>
              <ActionList.LeadingVisual>
                <Octicon icon={SignInIcon} size={30} className={classes.SelectIcon}></Octicon>
              </ActionList.LeadingVisual>
              registrarse
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
  </Box>  
  );
};

export default MenuCliente;