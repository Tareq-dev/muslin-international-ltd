import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import ProductCard from "./ProductCard";

function FeaturedItem() {
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
        <Grid container rowSpacing={5} columnSpacing={2} mx={12}>
          {data?.slice(0, 9)?.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Box>
                <ProductCard product={product} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default FeaturedItem;
