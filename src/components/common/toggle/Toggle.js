import React from "react";
import { ToggleContainer } from "./Toggle.styled";

const Toggle = ({ theme, onClick }) => {
  return <ToggleContainer theme={theme} onClick={onClick} />;
};

export default Toggle;
