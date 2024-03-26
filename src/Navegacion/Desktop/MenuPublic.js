import React from "react";
import useStyles from '../../Themes/useStyles';
import { Button, Container, Icon } from "@material-ui/core";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { SubNav } from "@primer/react-brand";


const MenuPublic = () => {
    const classes = useStyles();


    return(
        <>
            <Container sx={{position: 'relative', height: 100}}>
                <SubNav>
                    <SubNav.Heading style={{paddingRight:'20px'}} hr href="#">Features</SubNav.Heading>
                    <SubNav.Link href="#">Actions</SubNav.Link>
                    <SubNav.Link href="#">Packages</SubNav.Link>
                    <SubNav.Link href="#" aria-current="page">
                    Copilot
                    </SubNav.Link>
                    <SubNav.Link href="#">Code review</SubNav.Link>
                </SubNav>
            </Container>
                   
        </>
    );
};

export default MenuPublic;