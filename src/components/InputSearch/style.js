import styled from "styled-components";

export const ContainerSearcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  > input {
    width: 20%;
    height: 2rem;
    outline: 0;
    border-radius: 0.7rem;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.42);
    border: 0;
    padding-left: 1rem;

    &::placeholder {
      color: #000;
    }
  }
`;

export const ButtonSearcher = styled.button`
  background-color: var(--color-background);
  color: var(--color-two);
  border: 0;
  width: 6rem;
  height: 2rem;
  margin: 0 2rem;
`;
