import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color};
`;

export const HttpMethodSection = styled.div`
  flex: 2;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.color};
`;

export const EndpointSection = styled.input`
  flex: 6;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  outline: none;
  border: none;
  border-right: 1px solid ${({ theme }) => theme.color};
  width: 100%;
  height: 100%;
`;

export const SubmitSection = styled.button`
  flex: 2;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};
  outline: none;
  border: none;
  :active {
    opacity: 0.8;
  }
  width: 100%;
  height: 100%;
`;
