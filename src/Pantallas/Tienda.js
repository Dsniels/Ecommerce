import { Box, Card, Heading, ThemeProvider } from "@primer/react-brand";
import React, { useEffect, useState } from "react";
import { Pagination } from "@primer/react";
import { getProductos } from "../Actions/ProductoAction";

export default function Tienda(props) {
  const [requestProductos, setRequestProductos] = useState({
    page: 1,
    pageSize: 6,
  });

  const [paginador, setPaginador] = useState({
    count: 1,
    pageIndex: 1,
    pageSize: 1,
    pageCount: 10,
    data: [],
  });

  const handleChange = (e, value) => {
    e.preventDefault();
    setRequestProductos((prev) => ({
      ...prev,
      pageIndex: value,
    }));
  };

  useEffect(() => {
    const getListaProductos = async () => {
      const response = await getProductos(requestProductos);
      console.log(response.data);
      console.log(paginador)
      setPaginador(prev => ({...prev, data : response.data}))
    }

    getListaProductos();
  }, [requestProductos, paginador]);

  const detalles = async (item) => {
    props.history.push("/Detalles/" + item._id);
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >


        {paginador.data.map(data =>( 
            <Card
              ctaText="Detalles"
              onClick={() => detalles(data)}
              style={{
                width: "300px",
                height: "400px",
              }}
            >
              {" "}
              {/* Ajusta el ancho y alto aquí */}
              <Card.Image
                src={data.imagen ? data.imagen: "https://via.placeholder.com/600x400/d3d9df/d3d9df.png"}
                alt="placeholder, blank area with an gray background color"
                aspectRatio="16:9"
              />
              <Card.Heading>{data.name}</Card.Heading>
              <Card.Description style={{ flex: "1", overflow: "hidden" }}>
                ${data.precio}
              </Card.Description>
            </Card>
        ))}
          

        </Box>
      </ThemeProvider>
      <Pagination
        pageCount={3}
        currentPage={paginador.pageIndex}
        marginPageCount={1}
        onPageChange={handleChange}
      />
    </>
  );
}
