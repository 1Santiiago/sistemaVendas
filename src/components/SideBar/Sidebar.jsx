
import SideBarFooter from '../SideBarFooter/SideBarFooter';
import * as c from './style';
import { AiOutlineCloseCircle } from 'react-icons/ai';



function SideBar({handleSidebar}) {
  return (
    <c.Aside>
      <c.containerSide>
        <h2>Carrinho <br />de compras</h2>
       <AiOutlineCloseCircle onClick={handleSidebar}  />
      </c.containerSide>
      <SideBarFooter />
    </c.Aside>
  );
}

export default SideBar;
