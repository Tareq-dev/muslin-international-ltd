import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import toast from "react-hot-toast";
const styles = {
  cart: {
    backgroundColor: "#f7f7f7",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: "8px",
    padding: "8px",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
  },
};

function Cart({ cart }) {
  const cartArray = Object.values(cart);
  console.log(cartArray);
  const totalPrice = cartArray.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const totalQty = cartArray.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  console.log(totalPrice, totalQty);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ShoppingCartIcon sx={{ marginRight: "10px" }} />
        <Typography variant="h6" gutterBottom textAlign="center" mt={1}>
          Your Cart
        </Typography>
      </Box>
      <Box sx={styles.cart}>
        <List>
          {cartArray.length === 0 ? (
            <Typography variant="h5" color="text.primary">
              Your cart is empty
            </Typography>
          ) : (
            cartArray.map((item, index) => (
              <ListItem key={index} sx={styles.listItem}>
                <img
                  src={item.image}
                  alt={item?.title.split(" ").slice(0, 3).join(" ")}
                  style={{
                    width: "70px",
                    height: "70px",
                    padding: "0px 15px 0px 10px",
                    objectFit: "contain",
                  }}
                />
                <ListItemText
                  primary={item?.title.split(" ").slice(0, 3).join(" ")}
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
            ))
          )}
          {cartArray.length ? (
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box>
                  <Typography variant="h6" fontWeight="bold" textAlign="center">
                    Total Price : ${totalPrice.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    textAlign="center"
                    color="gray"
                  >
                    Total Qty : {totalQty} Pcs
                  </Typography>
                </Box>
              </Box>
              <Box my={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => {
                    toast.success("Shipment processing..");
                  }}
                  variant="contained"
                >
                  proceed to Checkout
                </Button>
              </Box>
            </Box>
          ) : (
            ""
          )}
        </List>
      </Box>
    </>
  );
}

export default Cart;
