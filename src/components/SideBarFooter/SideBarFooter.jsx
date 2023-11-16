
import * as c from './style.js'

function SideBarFooter ({data}) {
  return (
    <>
    <c.Box>
      <c.totalFooter>
        <h2>Total :</h2>
        <span>R$ {data}</span>
      </c.totalFooter>
    </c.Box>
    <c.footerSide>
        <h1>Finalizar Compra</h1>
    </c.footerSide>
    </>
  )
}

export default SideBarFooter 