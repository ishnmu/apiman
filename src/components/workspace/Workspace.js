import React, { useState } from "react";
import {
  WorkspaceContainer,
  InputSection,
  RequestSection,
  ResponseSection,
} from "./Workspace.styled";

import Input from "../input/Input";
import http from "../../service/http";

import Editor from "../common/editor/Editor";

const Workspace = () => {
  const [response, setResponse] = useState("");

  const onSubmit = (httpMethod, endpoint) =>
    http(httpMethod, endpoint)
      .then(({ data }) => setResponse(data))
      .catch((e) => setResponse(e));

  const supportedHttpMethods = [
    {
      id: 0,
      displayText: "GET",
      value: "GET",
    },
    {
      id: 1,
      displayText: "POST",
      value: "POST",
    },
    {
      id: 2,
      displayText: "PUT",
      value: "PUT",
    },
    {
      id: 3,
      displayText: "DELETE",
      value: "DELETE",
    },
    {
      id: 4,
      displayText: "HEAD",
      value: "HEAD",
    },
    {
      id: 5,
      displayText: "PATCH",
      value: "PATCH",
    },
  ];

  return (
    <WorkspaceContainer>
      <InputSection>
        <Input
          onSubmit={onSubmit}
          supportedHttpMethods={supportedHttpMethods}
        />
      </InputSection>
      <RequestSection>
        <Editor />
      </RequestSection>
      <ResponseSection>
        <Editor
          disabled
          value={
            response
              ? JSON.stringify(response, null, 4)
              : "submit to get response"
          }
        />
      </ResponseSection>
    </WorkspaceContainer>
  );
};

export default Workspace;
