import styled from "styled-components";

export const footerSide = styled.footer`
  width: 100%;
  height: 9.0625rem;
  background-color: #000;
  position: absolute;
  bottom: 0;
  text-align: center;
  cursor: pointer;
  > h1 {
    color: var(--color-two);
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 9.9375rem; 
    &:hover{
      color: white;
    }
  }
`;

export const Box = styled.div`
  position: absolute;
  width: 100%;
  bottom:10rem ;
`

export const totalFooter = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
bottom: 10rem;
align-items: center;
font-weight: 700;

font-size: 1.75rem;
>h2{
    color: var(--color-two);

}
>span{
  color: var(--color-two);
}

`