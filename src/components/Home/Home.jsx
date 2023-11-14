import React from "react";
import * as c from "./style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <>
      <Header />
      <c.allContainers></c.allContainers>
      <Footer />
    </>
  );
}

export default Home;
