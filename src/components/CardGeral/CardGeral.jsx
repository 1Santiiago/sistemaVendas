import * as c from "./style.js";
import shoppingBag from "../img/shopping-bag.svg";

function Card({ title, price, photo, onBuyClick }) {

  //criando funcionalidade de adicionar no carrinho

  const handleBuyClick = ()=>{
    onBuyClick({title, price, photo});
  }

  return (
    <c.Container>
      <c.Img src={photo} />
      <c.containerTitlePrice>
      <c.H2>{title}</c.H2>
     <c.P>{price}</c.P>
      </c.containerTitlePrice>
      <c.Button onClick={handleBuyClick}>
        <img src={shoppingBag} alt="" />
        Comprar
      </c.Button>
    </c.Container>
  );
}

export default Card;
