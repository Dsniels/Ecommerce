import React, { useState } from 'react'
import useStyles from '../../Themes/useStyles'
import { Avatar, Collapse, Link, ListItem, ListItemIcon, ListItemText,Icon, List } from "@material-ui/core";

export default function MenuMobile(props) {

    const[openCliente, setOpenCliente] = useState(false);
    const handleClickCliente = () => {
        setOpenCliente((prevOpen) => !prevOpen);
    }
    const classes = useStyles();

  return (
    <>
    
            <ListItem button onClick={handleClickCliente} className={classes.listItem}>
                <div className={classes.LinkBarmobile}>
                    <Avatar
                    alt="imagen"
                    className={classes.avatarPerfilAppBar}
                    ></Avatar>
                    <Icon> keyboard_arrow_down</Icon>
                </div>                
            </ListItem>
            <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.LinkBarmobile} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                                <ListItem button onClick = '/perfil'>
                                    <ListItemText>mi perfil</ListItemText>
                                </ListItem>
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.listSubItem} onClick={props.clickHandler}>
                        <Link className={classes.LinkBarmobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                                <ListItem button > 
                                    <ListItemText>cerrar sesion</ListItemText>
                                </ListItem>
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                </List>            
            </Collapse>
            <ListItem button className={classes.listItem} onClick={props.clickHandler}>
                <Link className={classes.LinkBarmobile} to="/carrito">
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>shopping_cart</Icon>
                        <ListItemText>Mis Pedidos</ListItemText>
                    </ListItemIcon>
                </Link>
            </ListItem>
        </>
  )
}
