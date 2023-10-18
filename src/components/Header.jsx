import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import hero from "../assets/images/hero1.png";

function Header() {
  const buttonStyle = {
    backgroundColor: "#ee2761",
    color: "white",
    marginTop: "20px",
  };

  return (
    <Stack
      direction="row"
      height="500px"
      bgcolor="#d4f8fc"
      justifyContent="space-between"
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "100px",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Collection and Style <br /> for everyone
          </Typography>
          <Typography color="gray" gutterBottom textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            praesentium dolor consequatur distinctio consectetur, corrupti
            perspiciatis quibusdam nam placeat atque eos assumenda dolore
            magnam, quas aut, fuga esse modi accusantium.
          </Typography>
          <Button variant="contained" style={buttonStyle}>
            Buy Now
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        <img
          src={hero}
          alt="Your Image"
          style={{ width: "", height: "500px", padding: "0px 15px 0px 10px" }}
        />
      </Box>
    </Stack>
  );
}

export default Header;
