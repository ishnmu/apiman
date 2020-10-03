import styled from "styled-components";

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 50%;

  height: 1rem;
  width: 1rem;
`;
