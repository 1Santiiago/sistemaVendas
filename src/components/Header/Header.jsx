// Header.jsx
import * as c from "./style";
import { FaCartPlus } from "react-icons/fa";

function Header({ handleSideBar }) {
  return (
    <c.Header>
      <div>
        <c.H1>
          Virtual <sub>Systems</sub>
        </c.H1>
      </div>
      <c.divCart>
        <button onClick={handleSideBar}>
          <FaCartPlus />
        </button>
        <span>0</span>
      </c.divCart>
    </c.Header>
  );
}

export default Header;
