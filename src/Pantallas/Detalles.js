import { ArrowLeftIcon } from '@primer/octicons-react';
import { Box, FormControl, Header, Heading, Label, PageLayout, Pagehead, Select } from '@primer/react';
import {  Button, CTABanner, Image, Text, TextInput } from '@primer/react-brand';
import React from 'react';

const Detalles = (props) => {

  const regresar = () => {
    props.history.push('/Tienda');
  }

  return (
    <>
    <PageLayout sx={{padding:50}} >
      <PageLayout.Header sx={{display:'flex', justifyItems:'center'}} >
        <Heading  style={{ paddingLeft:['0px','10px'], color: "white", weight: "bold", }} as="h1">
            
          </Heading>
          <Button size='small' onClick={regresar}  leadingVisual={<ArrowLeftIcon />} variant="subtle" hasArrow={false} >Regresar</Button>

      </PageLayout.Header>

        <PageLayout.Content  sx={{width:'80px', height:'auto'}}>
          <Label style={{margin:10}} size='large' variant='sponsors'>Producto</Label>
          <Image style={{ borderRadius:'10px' ,position:'relative',width:'100%', height:'auto'}} src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"/>

        </PageLayout.Content>
        <PageLayout.Pane divider='line' resizable={true} >
          <Box style={{ justifyContent:'left', borderBlockColor:'whitesmoke'}}>
            <Heading  style={{fontSize:'20px', fontSmooth:'always', fontWeight:'bolder',paddingTop:30, paddingBottom:10, display: 'flex', color:'whitesmoke', justifyContent:'left'}} >Detalles </Heading>
            <Text>detalleskdniorubeubvonsdmopajdioabs dbasjppksadknakabsjdbojncjkbajdas</Text>
            <Heading  style={{fontSize:'20px', fontSmooth:'always', fontWeight:'bolder',paddingTop:30, paddingBottom:10, display: 'flex', color:'whitesmoke', justifyContent:'left'}} >Precio: </Heading>
            <Text>$1200</Text>
            <FormControl sx={{paddingTop:30,paddingBottom:30, display: 'flex' ,justifyContent:'left'}}>
              <FormControl.Label>Cantidad: </FormControl.Label>
              <TextInput min="1" defaultValue={1} max={10} style={{scale:2}} type="number" placeholder="alphanumeric" />
            </FormControl>
            <Button  variant="primary">Agregar al carrito</Button>
          </Box>

          
        </PageLayout.Pane>
      </PageLayout>
      
    </>
  );
};
export default Detalles;
