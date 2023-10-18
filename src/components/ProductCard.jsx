import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 350 }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="200"
        sx={{ objectFit: "contain", position: "relative" }}
        image={product.image}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" component="div">
          {product?.title.split(" ").slice(0, 3).join(" ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h6" color="text.primary">
              ${product.price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating name="read-only" value={product.rating.rate} readOnly />
              <Typography>({product.rating.count} reviews)</Typography>
            </Box>
          </div>
          <IconButton
            onClick={() => addToCart(product)}
            aria-label="add to cart"
            sx={{ bgcolor: "#ee2761" }}
          >
            <AddShoppingCartIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
