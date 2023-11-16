import { useEffect, useState } from "react";
import ItemCarrinho from "../ComponentCarrinho/ItemCarrinho";
import SideBarFooter from "../SideBarFooter/SideBarFooter";
import * as c from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";

function SideBar({ handleSidebar, data, EmptyCard }) {
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const calculatedValue = () => {
      const total = data.reduce((acc, item) => acc + item.price, 0);
      setTotalValue(total);
    };
    calculatedValue();
  }, [data]);

  // const handleDelete = (index) => {
  //   if (data.length >= 0) {
  //     const newData = [...data];
  //     newData.splice(index, 1);
  //     setTotalValue(newData.reduce((acc, item) => acc + item.price, 0));
  //   }
  // };
  return (
    <c.Aside>
      <c.containerSide>
        <h2>
          Carrinho <br />
          de compras
        </h2>
        <p onClick={EmptyCard}>Limpar Carrinho</p>
        <AiOutlineCloseCircle onClick={handleSidebar} />
      </c.containerSide>
      {data &&
        data.map((item, i) => (
          <ItemCarrinho
            key={i}
            title={item.title}
            photo={item.photo}
            price={item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            // HandleDelete={handleDelete}
          />
        ))}
      <SideBarFooter
          data={totalValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      />
    </c.Aside>
  );
}

export default SideBar;
