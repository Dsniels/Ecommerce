import { Header, Octicon, Button, Overlay, Box } from "@primer/react";

import { ListUnorderedIcon } from "@primer/octicons-react";

import React, { useRef, useState } from "react";
import useStyles from "../Themes/useStyles";
import { Link } from "react-router-dom";
import MenuCliente from "./Desktop/MenuCliente";
import MenuMobile from "./Mobile/MenuMobile";
import { Heading } from "@primer/react-brand";

const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const openToggle = () => {
    setOpen(true);
  };
  const closeToggle = () => {
    setOpen(false);
  };
  const anchorRef = useRef(null);
  const buttonRef = useRef(null);
  const confirmRef = useRef(null);

  return (
    <div>
      <Header
        sx={{ color: "white", alignContent: "center" }}
        className={classes.Appbar}
      >
        <Header.Item full>
          <div ref={anchorRef} className={classes.sectionMobile}>
            <Button
              ref={buttonRef}
              size="small"
              sx={{
                backgroundColor: "transparent",
                size: 50,
                textDecoration: "none",
                ":active": { outline: "none" },
                ":foucus": { outline: "none" },
              }}
              variant="invisible"
              onClick={openToggle}
            >
              <Octicon
                icon={ListUnorderedIcon}
                sx={{ color: "whitesmoke" }}
                size={32}
              ></Octicon>
            </Button>
            {open ? (
              <Overlay
                initialFocusRef={confirmRef}
                returnFocusRef={buttonRef}
                ignoreClickRefs={[buttonRef]}
                onClickOutside={closeToggle}
                anchorSide="inside-left"
                width="130px"
                height="1080px"
                align="center"
                side="outside-bottom"
              >
                <Box
                  sx={{
                    height: ["1080px", "auto"], // 100vh en móviles, auto en otros dispositivos
                    width: ["100px", "500px"], // 100vw en móviles, 500px en otros dispositivos
                    display: "flex",
                    color: "white",
                    flexDirection: "column",
                  }}
                >
                  <MenuMobile clickHandler={closeToggle}></MenuMobile>
                </Box>
              </Overlay>
            ) : null}
          </div>
        </Header.Item>
        <Header.Item full>
          <div className={classes.grow}>
            <Link
              color="inherit"
              to="/Inicio"
              className={classes.LinkBarLogo}
              underline="none"
            >
              <Heading as="h3"> Tienda</Heading>
            </Link>
          </div>
        </Header.Item>
        <Header.Item full>
          <div
            style={{ border: "2px solid rgba(0, 0, 0, 0)" }}
            className={classes.sectionDesktop}
          >
            <Header.Item>
              <MenuCliente></MenuCliente>
              {/* <MenuPublic></MenuPublic> */}
            </Header.Item>
          </div>
        </Header.Item>
      </Header>
      {/* HOLAAAAA */}
    </div>
  );
};

export default MenuBar;
