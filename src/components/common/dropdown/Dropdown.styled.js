import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const DropButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};
  outline: none;
  border: none;

  width: 100%;

  hover {
    opacity: 0.1;
  }
`;

export const DropdownDataList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};

  border: 1px solid ${({ theme }) => theme.color};
  align-items: center;

  a:hover {
    opacity: 0.5;
  }
`;
