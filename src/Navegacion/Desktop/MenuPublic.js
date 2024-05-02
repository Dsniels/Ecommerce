import React from "react";

import { Box, SubNav } from "@primer/react-brand";

const MenuPublic = () => {
  return (
    <>
      <Box sx={{ position: "relative", height: 100 }}>
        <SubNav>
          <SubNav.Heading style={{ paddingRight: "20px" }} hr href="#">
            Features
          </SubNav.Heading>
          <SubNav.Link href="#">Actions</SubNav.Link>
          <SubNav.Link href="#">Packages</SubNav.Link>
          <SubNav.Link href="#" aria-current="page">
            Copilot
          </SubNav.Link>
          <SubNav.Link href="#">Code review</SubNav.Link>
        </SubNav>
      </Box>
    </>
  );
};

export default MenuPublic;
