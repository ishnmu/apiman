import styled from "styled-components";

export const BrandContainer = styled.div`
  display: flex;
  width: 5rem;
  height: 2rem;
  align-items: center;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  svg {
    height: auto;
    max-width: 2rem;
  }
`;

export const BrandElement = styled.div`
  margin: 1rem auto;
`;
