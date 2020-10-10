import styled from "styled-components";

export const WorkspaceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.1rem;

  width: 100vw;
  margin: 0;
  padding: 0;
`;

export const InputSection = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  height: 10vh;
  width: 100vw;
  margin: 0;
`;

export const RequestSection = styled.div`
  grid-column: 1 / 2;
  width: 50vw;
  grid-row: 2;
  height: 80vh;
`;

export const ResponseSection = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  width: 50vw;
  height: 80vh;
`;
