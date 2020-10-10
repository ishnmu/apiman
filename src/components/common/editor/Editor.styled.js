import styled from "styled-components";

export const EditorContainer = styled.textarea`
  resize: none;
  width: 100vw;
  height: 100vw;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;
