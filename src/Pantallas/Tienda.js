import { CopilotIcon, ZapIcon } from '@primer/octicons-react';
import { Box, Card, Grid, Heading, Stack, ThemeProvider } from '@primer/react-brand';
import React from 'react';
import {Pagination} from '@primer/react'

export default function Tienda() {
  return (
    <>
    <ThemeProvider colorMode="dark">
        <Heading style={{justifyContent:'center', display:'flex', paddingTop:20}} as='h2' color='white' weight={"bold"}  >
            Productos
        </Heading>
        <Box style={{alignItems:'center', display:'flex', justifyContent:'center'}} padding="spacious" backgroundColor="default">
            <Stack 
                direction={{
                    narrow: 'vertical',
                    regular: 'vertical',
                    wide: 'horizontal',
                }} padding="none">
                <Card ctaText='Detalles' style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column' }}> {/* Ajusta el ancho y alto aquí */}
                        <Card.Image
                            src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                            alt="placeholder, blank area with an gray background color"
                            aspectRatio="16:9"
                />
                <Card.Heading>Playera</Card.Heading>
                <Card.Description style={{ flex: '1', overflow: 'hidden' }}>
                $120
                </Card.Description>
            </Card>
            <Card
                ctaText='Detalles'
                href="https://github.com"
                style={{
                ['--brand-color-accent-primary']: 'var(--base-color-scale-lime-2)',
                width: '300px', // Ajusta el ancho aquí
                height: '400px', // Ajusta el alto aquí
                display: 'flex',
                flexDirection: 'column'
                }}
            >
                <Card.Image
                        src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                        alt="placeholder, blank area with an gray background color"
                        aspectRatio="16:9"
                    />
                <Card.Heading>Tenis</Card.Heading>
                <Card.Description style={{ flex: '1', overflow: 'hidden' }}>
                $4200
                </Card.Description>
            </Card>
            <Card ctaText='Detalles' href="https://github.com" style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column' }}> {/* Ajusta el ancho y alto aquí */}
                <Card.Image
                    src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                    alt="placeholder, blank area with an gray background color"
                    aspectRatio="16:9"
                />
                <Card.Heading>Short</Card.Heading>
                <Card.Description style={{ flex: '1', overflow: 'hidden' }}>
                $500
                </Card.Description>
            </Card>
            <Card ctaText='Detalles'
                href="https://github.com"
                style={{
                ['--brand-color-accent-primary']: 'var(--base-color-scale-lime-2)',
                width: '300px', // Ajusta el ancho aquí
                height: '400px', // Ajusta el alto aquí
                display: 'flex',
                flexDirection: 'column'
                }}
            >
                <Card.Image
                    src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                    alt="placeholder, blank area with an gray background color"
                    aspectRatio="16:9"
                />
                <Card.Heading>Balon </Card.Heading>
                <Card.Description style={{ flex: '1', overflow: 'hidden' }}>
                $400
                </Card.Description>
            </Card>
            </Stack>        
        </Box>
       <Box style={{alignItems:'center', display:'flex', justifyContent:'center'}} paddingTop="2px" backgroundColor="default">
            <Stack 
                direction={{
                    narrow: 'vertical',
                    regular: 'vertical',
                    wide: 'horizontal',
                }} padding="none">
                <Card ctaText='Detalles' style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column' }}> {/* Ajusta el ancho y alto aquí */}
                        <Card.Image
                            src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                            alt="placeholder, blank area with an gray background color"
                            aspectRatio="16:9"
                />
                <Card.Heading>Playera</Card.Heading>
                <Card.Description style={{ flex: '1', overflow: 'hidden' }}>
                $120
                </Card.Description>
            </Card>
            <Card
                ctaText='Detalles'
                href="https://github.com"
                style={{
                ['--brand-color-accent-primary']: 'var(--base-color-scale-lime-2)',
                width: '300px', // Ajusta el ancho aquí
                height: '400px', // Ajusta el alto aquí
                display: 'flex',
                flexDirection: 'column'
                }}
            >
                <Card.Image
                        src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                        alt="placeholder, blank area with an gray background color"
                        aspectRatio="16:9"
                    />
                <Card.Heading>Tenis</Card.Heading>
                <Card.Description style={{ flex: '1', overflow: 'hidden' }}>
                $4200
                </Card.Description>
            </Card>
            <Card ctaText='Detalles' href="/Detalles" style={{ width: '300px', height: '400px', display: 'flex', flexDirection: 'column' }}> {/* Ajusta el ancho y alto aquí */}
                <Card.Image
                    src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                    alt="placeholder, blank area with an gray background color"
                    aspectRatio="16:9"
                />
                <Card.Heading>Short</Card.Heading>
                <Card.Description style={{ flex: '1', overflow: 'hidden' }}>
                $500
                </Card.Description>
            </Card>
            <Card ctaText='Detalles'
                href="https://github.com"
                style={{
                ['--brand-color-accent-primary']: 'var(--base-color-scale-lime-2)',
                width: '300px', // Ajusta el ancho aquí
                height: '400px', // Ajusta el alto aquí
                display: 'flex',
                flexDirection: 'column'
                }}
            >
                <Card.Image
                    src="https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
                    alt="placeholder, blank area with an gray background color"
                    aspectRatio="16:9"
                />
                <Card.Heading>Balon </Card.Heading>
                <Card.Description style={{ flex: '1', overflow: 'hidden' }}>
                $400
                </Card.Description>
            </Card>
            </Stack>        
        </Box>

        
        </ThemeProvider>
        <Pagination
            pageCount={3}
            currentPage={1}
            marginPageCount={1}
            surroundingPageCount={2}
            onPageChange={e => e.preventDefault()}
            />
    </>
  );
}
