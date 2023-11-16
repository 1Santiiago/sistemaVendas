import styled from "styled-components";

export const Aside = styled.aside`
 width: 40rem;
  height: 100%;
  flex-shrink: 0;
  background: var(--color-background);
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  

 

`

export const containerSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;

  >h2{
    color: var(--color-two);
    font-size: 2.4rem;
  }

  > p{
    color: #fff;
    cursor: pointer;

    &:hover{
      color: var(--color-two);
    }
  }

  >svg{
    width:2.74rem;
    height:2.74rem;
    background-color: #000;
    color: var(--color-two);
    border-radius: 0.2rem;
    cursor: pointer;
  }
`