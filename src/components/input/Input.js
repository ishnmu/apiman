import React from "react";
import {
  InputContainer,
  HttpMethodSection,
  EndpointSection,
  SubmitSection,
} from "./Input.styled";

import Dropdown from "../common/dropdown/Dropdown";

const Input = ({ onSubmit, supportedHttpMethods }) => {
  const [httpMethod, setHttpMethod] = React.useState("");
  const [endpoint, setEndpoint] = React.useState("");

  const handleHttpMethodSelect = ({ value }) => {
    setHttpMethod(value);
  };

  return (
    <InputContainer>
      <HttpMethodSection>
        <Dropdown
          data={supportedHttpMethods}
          onSelect={handleHttpMethodSelect}
          defaultValue={supportedHttpMethods[1]}
        />
      </HttpMethodSection>
      <EndpointSection
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
      />
      <SubmitSection onClick={() => onSubmit(httpMethod, endpoint)}>
        SUBMIT
      </SubmitSection>
    </InputContainer>
  );
};

export default Input;
