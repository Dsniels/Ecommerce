import {  Header, Octicon,  } from "@primer/react";
import {  SquirrelIcon } from "@primer/octicons-react";
import {  Container, Toolbar, Typography, IconButton, Drawer, List,  Icon} from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../Themes/useStyles';
import { Link } from 'react-router-dom';
import MenuCliente from "./Desktop/MenuCliente";
import MenuMobile from "./Mobile/MenuMobile";



const MenuBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const openToggle =() => {
        setOpen(true);
    }
    const closeToggle =() => {
        setOpen(false);
    }

    return (
        <div>
            <Header sx={{color:'white', alignContent:'center'}} className={classes.Appbar} >
                 <Container >
                    <Toolbar>
                            <div className={classes.sectionMobile}>
                                <IconButton color ="inherit" onClick={openToggle}>
                                    <Icon fontSize = "large">menu</Icon>
                                </IconButton>
                            </div>  
                            <Drawer  open={open}
                            onClose={closeToggle}>
                                <div  className={classes.list}>
                                    <List>
                                       {/*  <MenuMobilePublic clickHandler={closeToggle}></MenuMobilePublic> */}
                                        <MenuMobile clickHandler={closeToggle}/>
                                    </List>
                                </div>
                                
                            </Drawer>                  
                            <div className={classes.grow}>   
                                
                                <Link color="inherit" to='/' className={classes.LinkBarLogo} underline="none">
                                    <Octicon icon={SquirrelIcon} size={32} sx={{mr:2}}></Octicon>
                                    <Typography variant="h5">Shop</Typography>
                                </Link>


                            </div>
                            <div style={{border:'2px solid rgba(0, 0, 0, 0)'}} className={classes.sectionDesktop}>   
                               
                                <Header.Item >

                                    <MenuCliente></MenuCliente>                                    
                                    {/* <MenuPublic></MenuPublic> */}

                                </Header.Item>


                            </div>
                            
                       
                    </Toolbar>
                </Container>
            </Header>


           
        </div>
    );
};

export default MenuBar;
