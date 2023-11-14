import styled from "styled-components";
export const Container = styled.div`
  width: 20rem;
  height: 21rem;
  border-radius: 0.5rem;
  background: #A9A9A9;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);
  position: relative;
`;
export const Img = styled.img`
  width: 8rem;
  margin: 1rem auto;
  display: block;
  padding: 0.2rem;
`;

export const containerTitlePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  line-height: 0%.1rem;
  padding: 0 2%;
  gap: 2rem;
`;

export const H2 = styled.h2`
  color: #2c2c2c;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem;
  width: 29rem;
`;
export const Button = styled.button`
  border: 0;
  width: 100%;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  color: var(--color-two);
  background-color: var(--color-background);
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  text-transform: uppercase;
  height: 2rem;
  cursor: pointer;
`;

export const P = styled.p`
  display: flex;
  width: 12rem;
  height: 2rem;
  border-radius: 0.3125rem;
  background: #373737;
  color: var(--color-two);
  align-items: center;
  font-weight: bold;
  font-size: 1.4rem;
  justify-content: center;
`;
