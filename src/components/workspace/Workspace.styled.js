import styled from "styled-components";

export const WorkspaceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.1rem;
`;

export const InputSection = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  height: 10vh;
`;

export const RequestSection = styled.div`
  grid-column: 1 / 2;
  grid-row: 2;
  max-height: 75vh;
`;

export const ResponseSection = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  max-height: 75vh;
`;
