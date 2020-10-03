import React from "react";
import { HeaderContainer, HeaderElement } from "./Header.styled";

import Brand from "../common/brand/Brand";

const Header = ({ theme }) => {
  return (
    <HeaderContainer theme={theme}>
      <HeaderElement>
        <Brand />
      </HeaderElement>
    </HeaderContainer>
  );
};

export default Header;
