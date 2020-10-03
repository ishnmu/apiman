import React from "react";
import { BrandContainer, BrandElement } from "./Brand.styled";
import { ReactComponent as Logo } from "./logo/apiman.svg";

const Brand = ({ theme }) => {
  return (
    <BrandContainer theme={theme}>
      <BrandElement>
        <Logo />
      </BrandElement>
      <BrandElement>
        <b>APIMAN</b>
      </BrandElement>
    </BrandContainer>
  );
};

export default Brand;
