import ItemCarrinho from "../ComponentCarrinho/ItemCarrinho";
import SideBarFooter from "../SideBarFooter/SideBarFooter";
import * as c from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";

function SideBar({ handleSidebar, data }) {
  return (
    <c.Aside>
      <c.containerSide>
        <h2>
          Carrinho <br />
          de compras
        </h2>
        <AiOutlineCloseCircle onClick={handleSidebar} />
      </c.containerSide>
      {data &&
        data.map((item, i) => (
          <ItemCarrinho
            key={i}
            title={item.title}
            photo={item.photo}
            price={item.price}
          />
        ))}
      <SideBarFooter />
    </c.Aside>
  );
}

export default SideBar;
