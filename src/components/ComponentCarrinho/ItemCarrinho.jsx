import React from "react";
import * as c from "./style.js";
import { P } from "../CardGeral/style";
import { TiDeleteOutline  } from "react-icons/ti";


const ItemCarrinho =({ title, price, photo, HandleDelete }) => {
  return (
    <c.ContainerSide>
      <c.CaixaItem>
        <c.Img src={photo} alt="" />
      </c.CaixaItem>
      <c.CaixaItem>
        <c.Title>{title}</c.Title>
      </c.CaixaItem>
      <P style={{ background: "none", color: "#000" }}>{price}</P>
      <TiDeleteOutline onClick={HandleDelete} />
    </c.ContainerSide>
  );
}

export default ItemCarrinho;
