import React from "react";
import {
  InputContainer,
  HttpMethodSection,
  EndpointSection,
  SubmitSection,
} from "./Input.styled";

const Input = ({ enpoint, onSubmit, onTyping }) => {
  return (
    <InputContainer>
      <HttpMethodSection>GET</HttpMethodSection>
      <EndpointSection
        value={enpoint}
        onChange={(e) => onTyping(e.target.value)}
      />
      <SubmitSection onClick={onSubmit}>SUBMIT</SubmitSection>
    </InputContainer>
  );
};

export default Input;
