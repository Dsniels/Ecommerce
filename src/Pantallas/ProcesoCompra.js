import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Heading, Octicon, PageLayout, Radio, Timeline } from "@primer/react";
import { PaperAirplaneIcon, TagIcon } from "@primer/octicons-react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Stack,
  Text,
  TextInput,
} from "@primer/react-brand";
import { useStateValue } from "../Context/store";
import { getDireccion, setDireccionUsuario } from "../Actions/DireccionAction";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { createOrden } from "../Actions/ordenActions";

const ProcesoCompra = () => {
  const history = useHistory();
  const continuarProceso = () => {
    history.push("/Inicio");
  };

  const [{ sesionDireccion, sesionCarrito }, dispatch] = useStateValue();
  const Carrito = sesionCarrito ? sesionCarrito.items : [];
  const PrecioTotal = () => {
    let Total = 0;
    Carrito.forEach((item) => {
      Total += item.price * item.quantity;
    });
    return Total;
  };

  console.log("🚀 ~ ProcesoCompra ~ Array:", Carrito);
  const [direccion, setDireccion] = useState({
    Ciudad: "",
    Estado: "",
    Pais: "",
    Colonia: "",
    CodigoPostal: "",
  });
  const [Orden, setOrden] = useState({
    Total: PrecioTotal(),
    items: Carrito,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDireccion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    getDireccion(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (sesionDireccion && sesionDireccion.direccion) {
      setDireccion(sesionDireccion.direccion);
    }
  }, [sesionDireccion]);

  const setEventoDireccion = (e) => {
    e.preventDefault();
    setDireccionUsuario(direccion, dispatch);
  };

  const createOrder = async () => {
    console.log("🚀 ~ createOrder ~ Array:", Carrito);
    return await createOrden(Orden);
  };
  function onApprove(data) {
    return fetch(
      `https://expressapiecommerce.azurewebsites.net/api/ordenes/${data.orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      },
    )
      .then((response) => response.json())
      .then((orderData) => {
        console.log(orderData);
        const name = orderData.payer.name.given_name;
        alert(`Transaction completed by ${name}`);
        continuarProceso();
      });
  }

  return (
    <PageLayout>
      <PageLayout.Content>
        <Timeline
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: 30,
            color: "white",
          }}
        >
          <Timeline.Item>
            <Timeline.Badge>
              <Octicon icon={PaperAirplaneIcon}></Octicon>
            </Timeline.Badge>
            <Timeline.Body>
              <Heading>Direccion Envio</Heading>
              <Box
                style={{
                  display: "grid",
                  width: "80%",
                  maxWidth: "700px",
                  gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
                  gap: 20,
                }}
              >
                <FormControl>
                  <FormControl.Label>Ciudad</FormControl.Label>
                  <TextInput
                    value={direccion.Ciudad}
                    name="Ciudad"
                    onChange={handleChange}
                    size="small"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Colonia</FormControl.Label>
                  <TextInput
                    value={direccion.Colonia}
                    size="small"
                    name="Colonia"
                    onChange={handleChange}
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Estado</FormControl.Label>
                  <TextInput
                    value={direccion.Estado}
                    name="Estado"
                    onChange={handleChange}
                    size="small"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Pais</FormControl.Label>
                  <TextInput
                    value={direccion.Pais}
                    name="Pais"
                    onChange={handleChange}
                    size="small"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Codigo postal</FormControl.Label>
                  <TextInput
                    value={direccion.CodigoPostal}
                    name="CodigoPostal"
                    onChange={handleChange}
                    size="small"
                    type="number"
                  />
                </FormControl>
              </Box>
              <Box style={{ marginTop: 30 }}>
                <FormControl>
                  <Button onClick={setEventoDireccion} variant="primary">
                    Aceptar
                  </Button>
                </FormControl>
              </Box>
            </Timeline.Body>
          </Timeline.Item>
        </Timeline>
      </PageLayout.Content>
      <PageLayout.Pane
        sx={{ backgroundColor: "#32383f", borderRadius: 20 }}
        width="large"
      >
        <Grid fullWidth>
          <Grid.Column
            style={{
              justifyContent: "center",
              display: "flex",
              margin: 25,
              color: "white",
            }}
            start={2}
            span={5}
          >
            <Heading>Resumen</Heading>
          </Grid.Column>
          <Grid.Column
            start={{ xlarge: 2, xxlarge: 2, large: 1, small: 2, xsmall: 2 }}
            span={3}
          >
            <Text font="hubot-sans"> Subtotal</Text>
          </Grid.Column>
          <Grid.Column
            start={{ xlarge: 5, xxlarge: 5, large: 5, small: 9, xsmall: 9 }}
            span={2}
          >
            <Text font="hubot-sans"> ${PrecioTotal()}</Text>
          </Grid.Column>
          <Grid.Column
            start={{ xlarge: 2, xxlarge: 2, large: 1, small: 2, xsmall: 2 }}
            span={3}
          >
            <Text font="hubot-sans"> Envio</Text>
          </Grid.Column>
          <Grid.Column
            start={{ xlarge: 5, xxlarge: 5, large: 5, small: 9, xsmall: 9 }}
            span={2}
          >
            <Text font="hubot-sans"> $0</Text>
          </Grid.Column>
          <Grid.Column
            start={{ xlarge: 2, xxlarge: 2, large: 1, small: 2, xsmall: 2 }}
            span={3}
          >
            <Text font="hubot-sans" weight="bold">
              {" "}
              Total
            </Text>
          </Grid.Column>
          <Grid.Column
            start={{ xlarge: 5, xxlarge: 5, large: 5, small: 9, xsmall: 9 }}
            span={2}
          >
            <Text font="hubot-sans" weight="bold">
              {" "}
              ${PrecioTotal()}
            </Text>
          </Grid.Column>
          <Grid.Column
            style={{ margin: 15, display: "flex", justifyContent: "center" }}
            start={{ xlarge: 1, xxlarge: 1, large: 1, small: 2, xsmall: 2 }}
            span={{ small: 10, xsmall: 10, xxlarge: 7, large: 7, xlarge: 7 }}
          >
            {/*  <Button block size='medium'  variant='primary' onClick={continuarProceso}>Comprar</Button> */}
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              style={{ layout: "horizontal" }}
            />
          </Grid.Column>
        </Grid>
      </PageLayout.Pane>
    </PageLayout>
  );
};

export default ProcesoCompra;
