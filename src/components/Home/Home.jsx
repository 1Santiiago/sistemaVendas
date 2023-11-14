import React from "react";
import * as c from "./style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../CardGeral/CardGeral";
import Apple from '../img/apple-watch.png'
function Home() {
  return (
    <>
      <Header />
      <c.allContainers>
        <Card photo={Apple} title={'Apple Watch'} price={'999'}/>
        <Card photo={Apple} title={'Apple Watch'} price={'999'}/>
        <Card photo={Apple} title={'Apple Watch'} price={'999'}/>
        <Card photo={Apple} title={'Apple Watch'} price={'999'}/>
        <Card photo={Apple} title={'Apple Watch'} price={'999'}/>
        <Card photo={Apple} title={'Apple Watch'} price={'999'}/>
        <Card photo={Apple} title={'Apple Watch'} price={'999'}/>
        <Card photo={Apple} title={'Apple Watch'} price={'999'}/>
        
      </c.allContainers>
      <Footer />
    </>
  );
}

export default Home;
