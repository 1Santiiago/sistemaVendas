import * as c from "./style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../CardGeral/CardGeral";
import { useQuery } from "react-query";
import { useState } from "react";
import SideBar from "../SideBar/Sidebar";

const query = 'items';
const limit = 8;
const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}&limit=${limit}`;

function Home() {
  const { data, isLoading, error } = useQuery('items', async () => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    const data = await response.json();

    return data.results;
  });

  const [isSidebarOpen, setSideBarOpen] = useState(false);

  const handleSidebar = () => {
    setSideBarOpen(!isSidebarOpen);
  };

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao buscar produtos: {error.message}</p>;
  }

  return (
    <>
      <Header handleSideBar={handleSidebar} />
      <c.allContainers>
        {data && data.map((item, index) => (
          <Card key={index} photo={item.thumbnail} title={item.title.substring(0, 79)} price={item.price} />
        ))}
      </c.allContainers>
      {isSidebarOpen && <SideBar handleSidebar={handleSidebar} />}
      <Footer />
    </>
  );
}

export default Home;
