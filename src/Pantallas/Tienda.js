import { Box, Card, Heading, Stack, ThemeProvider } from "@primer/react-brand";
import React, { useEffect, useState } from "react";
import { Pagination } from "@primer/react";
import { getProductos } from "../Actions/ProductoAction";

export default function Tienda(props) {

  const [requestProductos, setRequestProductos] = useState({
    pageIndex: 1,
    pageSize: 10,
    search: "",
  });
  
  const [paginador, setPaginador] = useState({
    count : 0,
    pageIndex: 0,
    pageSize: 0,
    data : []
  })

  const handleChange = (e, value) =>{
    setRequestProductos( (prev)=> ({
      ...prev,
      pageIndex: value
    }) );

  }

  useEffect( ()=>{
    const getListaProductos = async () => {
      const response = await getProductos(requestProductos);
      console.log(response);
      setPaginador(response.data)
    }

    getListaProductos();

  }, [requestProductos]);

  

  const detalles = async (item) => {
    props.history.push("/Detalles/" + item.id);
  };
  return (
    <>
      <ThemeProvider colorMode="dark">
        <Heading
          style={{ justifyContent: "center", display: "flex", paddingTop: 20 }}
          as="h2"
          color="white"
          weight={"bold"}
        >
          Productos
        </Heading>
        <Box
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          padding="spacious"
          backgroundColor="default"
        >
        {paginador.data.map(data =>( 
          <Stack
            direction={{
              narrow: "vertical",
              regular: "vertical",
              wide: "horizontal",
            }}
            key={data.key}
            padding="none"
          >
            <Card
              ctaText="Detalles"
              onClick={() => detalles(data)}
              style={{
                width: "300px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {" "}
              {/* Ajusta el ancho y alto aquí */}
              <Card.Image
                src={data.imagen ? data.imagen: "https://via.placeholder.com/600x400/d3d9df/d3d9df.png"}
                alt="placeholder, blank area with an gray background color"
                aspectRatio="16:9"
              />
              <Card.Heading>{data.nombre}</Card.Heading>
              <Card.Description style={{ flex: "1", overflow: "hidden" }}>
                ${data.precio}
              </Card.Description>
            </Card>
          </Stack>
        ))}
          
        </Box>
       
      </ThemeProvider>
{/*       <Pagination
        pageCount={paginador.count}
        currentPage={paginador.pageIndex}
        marginPageCount={1}
        onPageChange={handleChange}
      /> */}
    </>
  );
}
