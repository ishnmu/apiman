import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  margin: 0.5em auto;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};

  box-shadow: 0 0.1rem 0.2rem 0.01rem ${({ theme }) => theme.shadow};
`;

export const HeaderElement = styled.div`
  padding: 0.5rem;
`;
