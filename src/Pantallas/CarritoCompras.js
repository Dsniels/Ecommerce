import { FeedPlusIcon, NoEntryIcon, TrashIcon } from "@primer/octicons-react";
import { Heading, IconButton, PageLayout } from "@primer/react";
import { Box, Button, Grid, Image, Text } from "@primer/react-brand";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useStateValue } from "../Context/store";
import { deleteItem } from "../Actions/CarritoActions";

export default function CarritoCompras(props) {
  const history = useHistory();
  const ProcesoCompra = () => {
    history.push("/ProcesoCompra");
  };

  const [{ sesionCarrito }, dispatch] = useStateValue();

  const EliminarItem = async (item) => {
    const indice = sesionCarrito.items.findIndex((i) => i._id === item._id);

    if (indice !== -1) {
      await deleteItem(sesionCarrito, indice, dispatch);
      props.history.push("/Carriot");
    } else {
      console.log("Algo salio mal");
    }
  };
  const array = sesionCarrito ? sesionCarrito.items : [];

  const PrecioTotal = () => {
    let Total = 0;
    array.forEach((item) => {
      Total += item.price * item.quantity;
    });
    return Total;
  };

  return (
    <PageLayout
      sx={{ padding: 20, color: "white", backgroundColor: "#32383f" }}
      containerWidth="large"
    >
      <PageLayout.Content
        width="large"
        padding="condensed"
        sx={{ borderRadius: 20, backgroundColor: "#24292e" }}
      >
        <Grid fullWidth>
          <Grid.Column
            start={2}
            span={{ small: 11, xsmall: 12, large: 2, xlarge: 10, xxlarge: 10 }}
          >
            <Box>
              <Text font="hubot-sans" size="500" weight="extrabold">
                Mi carrito
              </Text>
            </Box>
          </Grid.Column>
          {array.map((item) => (
            <Grid.Column
              style={{
                padding: 10,
                backgroundColor: "#424a53",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              start={2}
              span={{ small: 12, xsmall: 12, large: 15, xlarge: 15 }}
            >
              <Box>
                <Image
                  src="https://avatars.githubusercontent.com/u/92997159?v=4"
                  width={40}
                  height={40}
                />
              </Box>
              <Box>{item.name}</Box>
              <Box>${item.price}</Box>
              <Box>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    variant="invisible"
                    icon={NoEntryIcon}
                    onClick={EliminarItem(item)}
                  />{" "}
                  {item.quantity}
                </Box>
              </Box>
              <IconButton variant="invisible" icon={TrashIcon} />
            </Grid.Column>
          ))}
        </Grid>
      </PageLayout.Content>
      <PageLayout.Pane
        divider="line"
        sx={{ borderRadius: 20, marginTop: 20, backgroundColor: "#24292e" }}
        position={{ narrow: "start", regular: "end", wide: "end" }}
        width="large"
      >
        <Grid fullWidth>
          <Grid.Column
            style={{ justifyContent: "center", display: "flex", margin: 25 }}
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
            <Text font="hubot-sans"> $13</Text>
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
              ${PrecioTotal() + 13}
            </Text>
          </Grid.Column>
          <Grid.Column
            style={{ margin: 15, display: "flex", justifyContent: "center" }}
            start={{ xlarge: 1, xxlarge: 1, large: 1, small: 2, xsmall: 2 }}
            span={{ small: 10, xsmall: 10, xxlarge: 7, large: 7, xlarge: 7 }}
          >
            <Button
              block
              size="medium"
              variant="primary"
              onClick={ProcesoCompra}
            >
              Comprar
            </Button>
          </Grid.Column>
        </Grid>
      </PageLayout.Pane>
    </PageLayout>
  );
}
