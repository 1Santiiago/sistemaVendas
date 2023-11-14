import * as c from "./style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../CardGeral/CardGeral";
import { useQuery } from "react-query";




const limit = 8
const url = `https://api.mercadolibre.com/sites/MLB/search?q=iphone&limit=${limit}`;

function Home() {

  const { data, isLoading, error} = useQuery('items', async ()=>{
    const response = await fetch(url)

    if(!response.ok){
      throw new Error('Erro na requisição')
    }

    const data = await response.json()
   
    return data.results

  })

  if(isLoading){
    return console.log('carregando')
  }

  if (error) {
    return <p>Erro ao buscar produtos: {error.message}</p>;
  }
  
  
  return (
    <>
      <Header />
      <c.allContainers>
       {
        data.map((item, index)=>(
          <Card key={index} photo={item.thumbnail} title={item.title} price={item.price}/>
        ))
       }
      </c.allContainers>
      <Footer />
    </>
  );
}

export default Home;
