import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const categories = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];

const buttonStyle = {
  backgroundColor: "#ee2761",
  color: "white",
  marginTop: "20px",
};

function FeaturedItem({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  // console.log(activeCategory);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (activeCategory === "all") {
      fetch(`https://fakestoreapi.com/products`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      fetch(`https://fakestoreapi.com/products/category/${activeCategory}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [activeCategory]);

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
      <div style={{ textAlign: "center", padding: "20px" }}>
        {categories?.map((category) => (
          <Button
            key={category}
            variant="outlined"
            style={{
              marginRight: "20px",
              color: category === activeCategory ? "white" : "black",
              backgroundColor:
                category === activeCategory ? "#ee2761" : "#d4f8fc",
            }}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
          // <div
          //   key={category}
          //   variant="outlined"
          //   color={category === activeCategory ? "primary" : "default"}
          //   onClick={() => setActiveCategory(category)}
          // >
          //   {category}
          // </div>
        ))}
        {/* <div>
          <h2>Products in {activeCategory}</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div> */}
      </div>

      <Box
        sx={{
          display: "flex",
        }}
        my={12}
      >
        <Grid container rowSpacing={8} columnSpacing={2} mx={2}>
          {products?.map((product, index) => (
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
