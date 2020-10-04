import React, { useState } from "react";
import {
  WorkspaceContainer,
  InputSection,
  RequestSection,
  ResponseSection,
} from "./Workspace.styled";

import Input from "../input/Input";
import http from "../http/http";

const Workspace = () => {
  const [httpMethod, setHttpMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("");
  const [response, setResponse] = useState("");

  const onSubmit = () =>
    http(httpMethod, endpoint)
      .then(({ data }) => setResponse(data))
      .catch((e) => setResponse(e));

  const onTyping = (value) => {
    setEndpoint(value);
  };

  return (
    <WorkspaceContainer>
      <InputSection>
        <Input enpoint={endpoint} onSubmit={onSubmit} onTyping={onTyping} />
      </InputSection>
      <RequestSection></RequestSection>
      <ResponseSection>
        {response ? JSON.stringify(response) : "submit to get response"}
      </ResponseSection>
    </WorkspaceContainer>
  );
};

export default Workspace;
