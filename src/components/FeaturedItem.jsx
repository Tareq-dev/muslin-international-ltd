import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import ProductCard from "./ProductCard";
const buttonStyle = {
  backgroundColor: "#ee2761",
  color: "white",
  marginTop: "20px",
};
function FeaturedItem({ addToCart, cart }) {
  //   console.log(cart);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <Box>
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        Featured Item
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        color="gray"
        fontWeight="500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut
        itaque, fugiat
      </Typography>
      <Box
        sx={{
          display: "flex",
        }}
        my={12}
      >
        <Grid container rowSpacing={8} columnSpacing={2} mx={2}>
          {data?.map((product, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Box>
                <ProductCard addToCart={addToCart} product={product} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default FeaturedItem;
