import { useState } from "react";
import { Container } from "@mui/material";
import Home from "./pages/Home";
import toast, { Toaster } from "react-hot-toast";

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
        <Home addToCart={addToCart} cart={cart} />
      </Container>
      <Toaster />
    </>
  );
}

export default App;
