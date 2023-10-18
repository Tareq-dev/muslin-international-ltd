import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Category from "../components/Category";
import NewArival from "../components/NewArival";

function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Category />
      <NewArival />
    </main>
  );
}

export default Home;
