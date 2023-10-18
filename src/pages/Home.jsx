import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import NewArival from "../components/NewArival";
import FeaturedItem from "../components/FeaturedItem";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

function Home({ addToCart, cart }) {
  return (
    <main>
      <Header />
      <Category />
      <NewArival />
      <FeaturedItem addToCart={addToCart} cart={cart} />
      <Blog />
      <Footer />
    </main>
  );
}

export default Home;
