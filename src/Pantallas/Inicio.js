import React from 'react';
import {Button, CTABanner, Card, Heading, Hero, Image, River, SectionIntro, Testimonial, Text, Timeline} from '@primer/react-brand';
import { Container } from '@material-ui/core';
import useStyles from '../Themes/useStyles';

const Inicio = () => {
    const classes = useStyles();
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
                        <Button as='a' href='/Tienda'>Tienda</Button>
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
                    <Heading>Break issues into actionable tasks</Heading>
                    <Text>
                    Tackle complex issues with task lists and track their status with new
                    progress indicators. Convert tasks into their own issues and navigate your
                    work hierarchy.
                    </Text>
                </River.Content>
            </River>
        </Container>
            

    </>
  )
};
export default Inicio;
