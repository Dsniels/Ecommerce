import React from 'react'
import useStyles from '../../Themes/useStyles'
import { Avatar, ListItem, } from "@material-ui/core";
import { NavList } from '@primer/react';


export default function MenuMobile(props) {

/*     const[openCliente, setOpenCliente] = useState(false);
    const handleClickCliente = () => {
        setOpenCliente((prevOpen) => !prevOpen);
    } */
    const classes = useStyles();

  return (
    <>
    
            <ListItem  className={classes.listItem}>
                <div className={classes.LinkBarmobile}>
                    <NavList className={classes.NavLisMobile}>
                        <NavList.Item className={classes.NavLisMobileItem}>
                            <Avatar style={{display:'flex', justifyContent:'center'}} size={20} className={classes.avatarPerfilAppBar} src="https://avatars.githubusercontent.com/u/92997159?v=4" />

                            <NavList.SubNav>
                                <NavList.Item className={classes.NavLisMobileItem} > Mi Perfil</NavList.Item>
                                <NavList.Item className={classes.NavLisMobileItem}> Mis Pedidos</NavList.Item>
                                <NavList.Divider />
                                <NavList.Item variant="danger"> Cerrar Sesion</NavList.Item>
                            </NavList.SubNav>
                        </NavList.Item>
                        <NavList.Item className={classes.NavLisMobileItem}>Productos</NavList.Item>
                        <NavList.Item className={classes.NavLisMobileItem}> Contacto</NavList.Item>
                        <NavList.Item className={classes.NavLisMobileItem}> Iniciar Sesion</NavList.Item>
                    </NavList>
                </div>                
            </ListItem>
            
        </>
  )
}
