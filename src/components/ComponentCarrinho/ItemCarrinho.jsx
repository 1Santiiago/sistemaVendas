import React from "react";
import * as c from "./style.js";
import { P } from "../CardGeral/style";


const ItemCarrinho =({ title, price, photo }) => {
  return (
    <c.ContainerSide>
      <c.CaixaItem>
        <c.Img src={photo} alt="" />
      </c.CaixaItem>
      <c.CaixaItem>
        <c.Title>{title}</c.Title>
      </c.CaixaItem>
      <P style={{ background: "none", color: "#000" }}>{price}</P>
    </c.ContainerSide>
  );
}

export default ItemCarrinho;
