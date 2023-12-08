
import { useState } from 'react'
import * as c from './style.js'

function SideBarFooter ({data}) {
  const [mensagem, SetMensagem] = useState(null)


  const Finalizar = () => {
    setTimeout(() => {
      {alert('Obrigado por comprar com a gente')}
      window.location.reload()
    }, 100);

  };


  return (
    <>
    <c.Box>
      <c.totalFooter>
        <h2>Total :</h2>
        <span>{data}</span>
      </c.totalFooter>
    </c.Box>
    <c.footerSide>
        <h1 onClick={Finalizar} >Finalizar Compra</h1>
    </c.footerSide>
    </>
  )
}

export default SideBarFooter 