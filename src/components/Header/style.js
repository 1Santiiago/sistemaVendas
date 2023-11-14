import styled from "styled-components";

export const Header = styled.header`
  background: var(--color-background);
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-shrink: 0;
  height: 6.3rem;
  align-items: center;
`
export const H1 = styled.h1`
color: var(--color-two);
font-size: 2.5rem;
font-style: normal;
font-weight: 600;
line-height: 1.1875rem;

>sub{
    font-weight: 100;
}
`

export const divCart = styled.div`
width: 5.625rem;
height: 2.8125rem;
background-color: var(--color-two);
display: flex;
align-items: center;
justify-content: space-evenly;
border-radius: 0.5rem;

>button{border:0;
  background:none;
  cursor: pointer;
}


>span{
color: #000;
font-size: 1.125rem;
font-style: normal;
font-weight: bold;
line-height: normal;
}
>img{
    cursor: pointer;
}
`