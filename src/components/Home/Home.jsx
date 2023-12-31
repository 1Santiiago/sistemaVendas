// Home.jsx
import React, { useEffect, useState } from 'react';
import * as c from "./style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../CardGeral/CardGeral";
import { useQuery } from "react-query";
import SideBar from "../SideBar/Sidebar";
import InputSearch from "../InputSearch/InputSearch";


function Home() {
  const [searchQuery, setSearchQuery] = useState('iphone');
  const limit = 8;
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(debouncedSearchQuery)}&limit=${limit}`;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); 
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);


  const { data, isLoading, error } = useQuery("items", async () => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();

    return data.results;
  });

  const [isSidebarOpen, setSideBarOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleSidebar = () => {
    setSideBarOpen(!isSidebarOpen);
  };

  const handleBuyClick = (itemData) => {
    setCart((prevCart) => [...prevCart, itemData]);
  };

  const EmptyCard = () => {
    setCart([]);
  };

  const HandleDelete = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao buscar produtos: {error.message}</p>;
  }



  
  return (
    <>
      <Header handleSideBar={handleSidebar} cart={cart} />
      <InputSearch onSearch={setSearchQuery} />
      <c.allContainers>
        {data &&
          data.map((item, index) => (
            <Card
              key={index}
              photo={item.thumbnail}
              title={item.title.substring(0, 79)}
              price={item.price}
              onBuyClick={handleBuyClick}
            />
          ))}
      </c.allContainers>
      {isSidebarOpen && (
        <SideBar
          HandleDelete={HandleDelete}
          handleSidebar={handleSidebar}
          data={cart}
          EmptyCard={EmptyCard}
        />
      )}
      <Footer />
    </>
  );
}

export default Home;
