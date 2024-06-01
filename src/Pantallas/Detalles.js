import { ArrowLeftIcon } from "@primer/octicons-react";
import { Box, FormControl, Heading, Label, PageLayout } from "@primer/react";
import { Button, Image, Text, TextInput } from "@primer/react-brand";
import React, { useEffect, useState } from "react";
import { getProducto } from "../Actions/ProductoAction";

const Detalles = (props) => {
  const [cantidad, setCantidad] = useState(1);

  const [productoSeleccionado, setProductoSeleccionado] = useState({

    id : 0,
    name:'',
    descripcion :'',
    stock:0,
    marcaId:0,
    marca:'',
    precio:0.0,
    imagen:'',
    categoria:'',
    categoriaId:0

  });

  useEffect(() => {
    const id = props.match.params.id;
    const getProductoAsync = async () => {
      const response = await getProducto(id);
      setProductoSeleccionado(response.data);
    };

    getProductoAsync();
  }, [setProductoSeleccionado, props.params.match.id]);

  const agregarCarrito = async () =>{

    const item = {
      id: productoSeleccionado._id,
      producto: productoSeleccionado.name,
      precio: productoSeleccionado.precio,
      cantidad: cantidad,
      imagen: productoSeleccionado.imagen,
      marca: productoSeleccionado.marcaNombre,
      categoria: productoSeleccionado.categoria,
    };
  };

  const regresar = () => {
    props.history.push("/Tienda");
  };

  return (
    <>

      <PageLayout sx={{ padding: 50 }}>
        <PageLayout.Header sx={{ display: "flex", justifyItems: "center" }}>
          <Heading
            style={{
              paddingLeft: ["0px", "10px"],
              color: "white",
              weight: "bold",
            }}
            as="h1"
          ></Heading>
          <Button
            size="small"
            onClick={regresar}
            leadingVisual={<ArrowLeftIcon />}
            variant="subtle"
            hasArrow={false}
          >
            Regresar
          </Button>
        </PageLayout.Header>


        <PageLayout.Content sx={{ width: "80px", height: "auto" }}>
          <Label style={{ margin: 10 }} size="large" variant="sponsors">
            {productoSeleccionado.marca}
          </Label>
          <Image
            style={{
              borderRadius: "10px",
              position: "relative",
              width: "100%",
              height: "auto",
            }}
            src={
              productoSeleccionado.imagen
                ? productoSeleccionado.imagen
                : "https://via.placeholder.com/600x400/d3d9df/d3d9df.png"
            }
          />
        </PageLayout.Content>

        <PageLayout.Pane width="large" divider="line" resizable={false}>
          <Box
            style={{ justifyContent: "left", borderBlockColor: "whitesmoke" }}
          >
            <Heading
              style={{
                fontSize: "60px",
                fontSmooth: "always",
                fontWeight: "bolder",
                paddingTop: 30,
                paddingBottom: 10,
                display: "flex",
                color: "whitesmoke",
                justifyContent: "left",
              }}
            >
              {productoSeleccionado.name}{" "}
            </Heading>
            <Heading
              style={{
                fontSize: "20px",
                fontSmooth: "always",
                fontWeight: "bolder",
                paddingTop: 30,
                paddingBottom: 10,
                display: "flex",
                color: "whitesmoke",
                justifyContent: "left",
              }}
            >
              Detalles{" "}
            </Heading>
            <Text
              style={{ overflowWrap: "break-word" }}
              weight="normal"
              size="100"
            >
              {productoSeleccionado.descripcion}
            </Text>
            <Heading
              style={{
                fontSize: "20px",
                fontSmooth: "always",
                fontWeight: "bolder",
                paddingTop: 30,
                paddingBottom: 10,
                display: "flex",
                color: "whitesmoke",
                justifyContent: "left",
              }}
            >
              Precio:{" "}
            </Heading>

            <Text>${productoSeleccionado.precio}</Text>
            <FormControl
              sx={{
                paddingTop: 30,
                paddingBottom: 30,
                display: "flex",
                justifyContent: "left",
              }}
            >
              <FormControl.Label>Cantidad: </FormControl.Label>
              <TextInput
                min="1"
                value={cantidad}
                defaultValue={1}
                onChange={(e) => setCantidad(e.target.value)}
                max={10}
                style={{ scale: 2 }}
                type="number"
                placeholder="alphanumeric"
              />
            </FormControl>
            <Button variant="primary">Agregar al carrito</Button>
          </Box>
        </PageLayout.Pane>
      </PageLayout>
    </>
  );
};
export default Detalles;
