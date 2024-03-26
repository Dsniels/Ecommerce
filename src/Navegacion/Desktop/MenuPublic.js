import React from "react";
import { Container } from "@material-ui/core";
import { SubNav } from "@primer/react-brand";


const MenuPublic = () => {


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