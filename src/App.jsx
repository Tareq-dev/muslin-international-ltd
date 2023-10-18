import { useState } from "react";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import toast, { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  // Add to card

  const addToCart = (item) => {
    const { id, title, price } = item;

    if (cart[id]) {
      toast.error("Already exist in cart");
      const updatedCart = { ...cart };
      updatedCart[id].quantity += 1;
      setCart(updatedCart);
    } else {
      toast.success("A Product added");
      setCart({ ...cart, [id]: { title, price, quantity: 1 } });
    }
  };

  return (
    <>
      <Container maxWidth="xl">
        <Navbar cart={cart} />

        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} cart={cart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Container>
      <Toaster />
    </>
  );
}

export default App;
