import React from "react";
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

const ProcesoCompra = () => {
  const history = useHistory();
  const continuarProceso = () => {
    history.push("/Inicio");
  };

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
                  <TextInput size="small" type="text" />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Colonia</FormControl.Label>
                  <TextInput size="small" type="text" />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Calle</FormControl.Label>
                  <TextInput size="small" type="text" />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Numero Interior</FormControl.Label>
                  <TextInput size="small" type="text" />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Codigo postal</FormControl.Label>
                  <TextInput size="small" type="text" />
                </FormControl>
              </Box>
              <Box style={{ marginTop: 30 }}>
                <FormControl>
                  <Button onClick={continuarProceso} variant="primary">
                    Aceptar
                  </Button>
                </FormControl>
              </Box>
            </Timeline.Body>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Badge>
              <Octicon icon={TagIcon}></Octicon>
            </Timeline.Badge>
            <Timeline.Body>
              <Stack direction="vertical" padding="condensed" gap="condensed">
                <Heading>Metodo de Pago</Heading>
                <FormControl
                  style={{ display: "inline-flex", flexDirection: "row" }}
                >
                  <Radio name="default-radio-name" value="paypal" />
                  <FormControl.Label>Paypal</FormControl.Label>
                </FormControl>
              </Stack>
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
            <Text font="hubot-sans"> $132</Text>
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
              $145
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
              onClick={continuarProceso}
            >
              Comprar
            </Button>
          </Grid.Column>
        </Grid>
      </PageLayout.Pane>
    </PageLayout>
  );
};

export default ProcesoCompra;
