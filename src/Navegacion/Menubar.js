import { Header, Octicon, Button, Overlay, Box} from "@primer/react";

import {  ListUnorderedIcon, SquirrelIcon } from "@primer/octicons-react";
import {  Container, Toolbar, Typography} from '@material-ui/core';
import React, { useRef, useState } from 'react';
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
    const anchorRef = useRef(null);
    const buttonRef = useRef(null);
    const confirmRef = useRef(null);
    
    return (
        <div>
            <Header sx={{color:'white', alignContent:'center'}} className={classes.Appbar} >
                 <Container >
                    <Toolbar>
                            <div ref={anchorRef} className={classes.sectionMobile}>
                                <Button ref={buttonRef}
                                    size="small"
                                    sx={{
                                        backgroundColor:'transparent',
                                        size:50, 
                                        textDecoration:'none', 
                                        ':active':{ outline: 'none'},
                                        ':foucus': { outline: 'none' }
                                    }} 
                                    variant="invisible"  
                                    onClick={openToggle}
                                >
                                    <Octicon icon={ListUnorderedIcon} sx={{color:'whitesmoke'}} size={32}></Octicon>
                                </Button>
                                    {open ?  ( 
                                    <Overlay initialFocusRef={confirmRef} returnFocusRef={buttonRef} ignoreClickRefs={[buttonRef]}
                                     onClickOutside={closeToggle} anchorSide="inside-left"
                                      width="130px" height="1080px" align="center" side="outside-bottom"
                                      
                                      >
                                        <Box
                                            sx={{
                                                height: ['1080px', 'auto'], // 100vh en móviles, auto en otros dispositivos
                                                width: ['100px', '500px'], // 100vw en móviles, 500px en otros dispositivos
                                                display: 'flex',
                                                color: 'white',
                                                flexDirection: 'column',
                                                
                                            }}
                                        >
                                            <MenuMobile clickHandler={closeToggle}></MenuMobile>
                                        </Box> 
                                    </Overlay>
                                    ) : null
                                    }
                            </div>  
                                         
                            <div className={classes.grow}>   
                                
                                <Link color="inherit" to='/Inicio' className={classes.LinkBarLogo} underline="none">
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
