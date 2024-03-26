import React from "react";

import useStyles from "../../Themes/useStyles";

import { ActionList, ActionMenu, Avatar, Octicon, } from "@primer/react";
import { PasteIcon, PersonIcon, SignOutIcon } from "@primer/octicons-react";
import { Container} from "@material-ui/core";

const MenuCliente = (props) => {
  const classes = useStyles();
  
  return (
    <Container className={classes.linkBarDesktop} style={{ display: 'flex', alignItems: 'center' }}>


      {/* ActionMenu */}
      <ActionMenu >
        <ActionMenu.Button style={{ fontSize: 16, color: 'white', paddingLeft: 10, textAlign: 'center', display: 'flex', backgroundColor: 'transparent' }} variant="invisible">
          <Avatar size={50} className={classes.avatarPerfilAppBar} src="https://avatars.githubusercontent.com/u/92997159?v=4" />
          Daniel Salazar
        </ActionMenu.Button>
        <ActionMenu.Overlay align="center" side="outside-bottom">
          <ActionList style={{ display: 'flex' }} className={classes.ActionList}>
            <ActionList.Item style={{ display: 'flex' }} className={classes.ActionListItems}>
              <ActionList.LeadingVisual>
                <Octicon className={classes.SelectIcon} size={30} icon={PersonIcon}></Octicon>
              </ActionList.LeadingVisual>
              Mi Perfil
            </ActionList.Item>
            <ActionList.Item className={classes.ActionListItems}>
              <ActionList.LeadingVisual>
                <Octicon icon={PasteIcon} size={30} className={classes.SelectIcon}></Octicon>
              </ActionList.LeadingVisual>
              Mis Pedidos
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item variant="danger" className={classes.ActionListItems}>
              <ActionList.LeadingVisual>
                <Octicon icon={SignOutIcon} size={30} className={classes.SelectIcon}></Octicon>
              </ActionList.LeadingVisual>
              Cerrar Sesion
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </Container>
  );
};

export default MenuCliente;