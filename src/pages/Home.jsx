import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Category from "../components/Category";
import NewArival from "../components/NewArival";
import FeaturedItem from "../components/FeaturedItem";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Category />
      <NewArival />
      <FeaturedItem />
      <Blog />
      <Footer />
    </main>
  );
}

export default Home;
