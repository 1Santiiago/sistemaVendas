// Header.jsx
import * as c from "./style";
import Vector from '../img/vector.svg'
function Header({handleSidebar}) {
  return (
    <c.Header>
      <div>
        <c.H1>
          San <sub>Sistemas</sub>
        </c.H1>
      </div>
      <c.divCart>
        <button onClick={handleSidebar} >
          <img src={Vector} alt=""/>
        </button>
        <span>0</span>
      </c.divCart>
    </c.Header>
  );
}

export default Header;
