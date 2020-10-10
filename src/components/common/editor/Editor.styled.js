import styled from "styled-components";

export const EditorContainer = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-x: auto;
  overflow-y: auto;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;
