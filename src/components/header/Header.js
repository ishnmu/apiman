import React from "react";
import { HeaderContainer, HeaderElement } from "./Header.styled";
import Toggle from "../common/toggle/Toggle";

import Brand from "../common/brand/Brand";

const Header = ({ theme, onThemeToggle }) => {
  return (
    <HeaderContainer theme={theme}>
      <HeaderElement>
        <Brand />
      </HeaderElement>
      <HeaderElement>
        <Toggle onClick={onThemeToggle} />
      </HeaderElement>
    </HeaderContainer>
  );
};

export default Header;
