import React from 'react';
import {Button, CTABanner, Heading, Image, River, Text} from '@primer/react-brand';
import { Container } from '@material-ui/core';
import useStyles from '../Themes/useStyles';


const Inicio = (props) => {
    const classes = useStyles();
    

    const tienda = () => {  
        props.history.push('/Tienda');
    }
  return (
    <>
        <section style={{marginTop:100, padding:3}}>
            <Container className={classes.containermt} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CTABanner   hasBorder>
                    <CTABanner.Heading>
                        Tienda en linea 
                    </CTABanner.Heading>
                    <CTABanner.Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit
                        ullamcorper id. Aliquam luctus sed turpis felis nam pulvinar risus
                        elementum.
                    </CTABanner.Description>
                    <CTABanner.ButtonGroup>
                        <Button onClick={tienda} >
                            Tienda
                        </Button>
                    </CTABanner.ButtonGroup>
                </CTABanner>
            </Container>            
        </section>
        
        
        <Container style={{padding:50}}>
            <River imageTextRatio="60:40">
                <River.Visual hasShadow={false}>
                    <Image  src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                            alt="placeholder, blank area with an gray background color"
                            aspectRatio="16:9"
                    />

                </River.Visual>
                <River.Content>
                    <Heading>Producto nuevo</Heading>
                    <Text>
                        das asdkn  uiebd ajsbda ubvc as dsald
                    </Text>
                </River.Content>
            </River>
        </Container>
            

    </>
  )
};
export default Inicio;
