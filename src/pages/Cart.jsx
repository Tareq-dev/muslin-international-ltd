import React from "react";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const styles = {
  cart: {
    backgroundColor: "#f7f7f7",
    padding: "20px",
    borderRadius: "8px",
  },
  listItem: {
    backgroundColor: "white",
    marginBottom: "8px",
    padding: "8px",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
  },
};

function Cart({ cart }) {
  const cartArray = Object.values(cart);
  //   console.log(cartArray);

  return (
    <Box sx={styles.cart}>
      <Typography variant="h6" gutterBottom>
        Your Cart <ShoppingCartIcon />
      </Typography>
      <List>
        {cartArray.map((item, index) => (
          <ListItem key={index} sx={styles.listItem}>
            <ListItemText
              primary={item.title}
              secondary={
                <>
                  <Typography variant="body2" color="text.primary">
                    Price: ${item.price}
                  </Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Cart;
