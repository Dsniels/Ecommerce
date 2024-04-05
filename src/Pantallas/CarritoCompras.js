import { FeedPlusIcon, NoEntryIcon, TrashIcon } from '@primer/octicons-react'
import { ButtonGroup, Heading, IconButton, Octicon, PageLayout } from '@primer/react'
import { Box, Button, Grid, Image, Stack, Text } from '@primer/react-brand'
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '../Themes/theme';

export default function CarritoCompras() {
  return (
    <PageLayout sx={{padding:60,color:'white',  backgroundColor:'#32383f'}} containerWidth='large'>

        <PageLayout.Content width='large' padding='condensed' sx={{borderRadius:20,backgroundColor:'#24292e'}} >
            <Grid  fullWidth >

                <Grid.Column start={2} span={{small:11, xsmall:12, large:2, xlarge:10,xxlarge:10}}>
                    <Box >
                        <Text font='hubot-sans' size='500' weight='extrabold'>Mi carrito</Text>
                    </Box>

                </Grid.Column>
                <Grid.Column style={{ padding:10,backgroundColor:'#424a53', borderRadius:'10px',display:'flex', justifyContent:'space-between', alignItems:'center'}} start={2} span={{small:12, xsmall:12, large:15, xlarge:15}}>
                    <Box>
                        <Image src='https://avatars.githubusercontent.com/u/92997159?v=4' width={40} height={40} />
                    </Box>
                    <Box>
                        Tenis Nike
                    </Box>
                    <Box>
                        $132
                    </Box>
                    <Box>
                        <Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <IconButton variant='invisible' icon={NoEntryIcon}/> 1 <IconButton variant='invisible' icon={FeedPlusIcon}/>
                        </Box>
                    </Box>
                    <IconButton variant='invisible' icon={TrashIcon} />
                </Grid.Column>


            </Grid>

        </PageLayout.Content>
        <PageLayout.Pane divider='line' sx={{borderRadius:20,marginTop:20, backgroundColor:'#24292e'}} position={{narrow:'start',regular:'end', wide:'end'}} width='large' >
            
                <Grid  fullWidth >
                    <Grid.Column style={{ justifyContent:'center', display:'flex',margin:25}} start={2} span={5} >
                          <Heading>Resumen</Heading>
                    </Grid.Column>
                    <Grid.Column start={{xlarge:2, xxlarge:2, large:1, small:2, xsmall:2}} span={3}>
                        <Text font='hubot-sans'> Subtotal</Text>
                    </Grid.Column>
                    <Grid.Column start={{xlarge:5, xxlarge:5, large:5, small:9, xsmall:9}} span={2}>
                        <Text font='hubot-sans'> $132</Text>
                    </Grid.Column>
                    <Grid.Column start={{xlarge:2, xxlarge:2, large:1, small:2, xsmall:2}} span={3}>
                        <Text font='hubot-sans'> Envio</Text>
                    </Grid.Column>
                    <Grid.Column start={{xlarge:5, xxlarge:5, large:5, small:9, xsmall:9}} span={2}>
                        <Text font='hubot-sans'> $13</Text>
                    </Grid.Column>
                    <Grid.Column start={{xlarge:2, xxlarge:2, large:1, small:2, xsmall:2}} span={3}>
                        <Text font='hubot-sans' weight='bold'> Total</Text>
                    </Grid.Column>
                    <Grid.Column start={{xlarge:5, xxlarge:5, large:5, small:9, xsmall:9}} span={2}>
                        <Text font='hubot-sans' weight='bold'> $145</Text>
                    </Grid.Column>
                    <Grid.Column style={{margin:15,display:'flex', justifyContent:'center'}} start={{xlarge:1, xxlarge:1, large:1,small:2, xsmall:2}} span={{small:10, xsmall:10, xxlarge:7, large:7, xlarge:7}}>
                        <Button block size='medium' variant='primary'>Comprar</Button>
                    </Grid.Column>
                </Grid>
        </PageLayout.Pane>
    </PageLayout>
  )
}
