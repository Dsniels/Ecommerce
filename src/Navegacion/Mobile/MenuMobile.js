import React from 'react'
import useStyles from '../../Themes/useStyles'

import { NavList } from '@primer/react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Avatar, ListItem } from '@material-ui/core';



export default function MenuMobile(props) {

/*     const[openCliente, setOpenCliente] = useState(false);
    const handleClickCliente = () => {
        setOpenCliente((prevOpen) => !prevOpen);
    } */
    const history = useHistory();
    const classes = useStyles();
    const perfil = () => {
        history.push("/Perfil");
    };
    const pedidos = () => {
        history.push("/Pedidos");
    };
    const iniciarSesion = () => {
        history.push("/IniciarSesion");
    };
    const tienda = () => {
        history.push("/Tienda");
    };

  return (
    <>
    
            <ListItem  className={classes.listItem}>
                <div className={classes.LinkBarmobile}>
                    <NavList className={classes.NavLisMobile}>
                        <NavList.Item className={classes.NavLisMobileItem}>
                            <Avatar style={{display:'flex', justifyContent:'center'}} size={20} className={classes.avatarPerfilAppBar} src="https://avatars.githubusercontent.com/u/92997159?v=4" />

                            <NavList.SubNav>
                                <NavList.Item onClick={perfil} className={classes.NavLisMobileItem} > Mi Perfil</NavList.Item>
                                <NavList.Item onClick={pedidos} className={classes.NavLisMobileItem}> Mis Pedidos</NavList.Item>
                                <NavList.Divider />
                                <NavList.Item variant="danger"> Cerrar Sesion</NavList.Item>
                            </NavList.SubNav>
                        </NavList.Item>
                        <NavList.Item onClick={tienda} className={classes.NavLisMobileItem}>Productos</NavList.Item>
                        <NavList.Item className={classes.NavLisMobileItem}> Contacto</NavList.Item>
                        <NavList.Item onClick={iniciarSesion} className={classes.NavLisMobileItem}> Iniciar Sesion</NavList.Item>
                    </NavList>
                </div>                
            </ListItem>
            
        </>
  )
}
