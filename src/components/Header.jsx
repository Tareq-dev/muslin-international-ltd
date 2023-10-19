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
      id="Home"
      direction={{ xs: "column", sm: "row" }}
      height={{ xs: "auto", sm: "500px" }}
      bgcolor="#d4f8fc"
      justifyContent="space-between"
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "50%",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: {
            xs: "20px",
            sm: "100px",
          },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "24px",
                textAlign: "center",
              },
            }}
            gutterBottom
          >
            Collection and Style <br /> for everyone
          </Typography>
          <Typography
            color="gray"
            gutterBottom
            textAlign="justify"
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "14px",
                width: "90%",
                paddingX: "8px",
              },
            }}
          >
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
          width: {
            xs: "100%",
            sm: "50%",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={hero}
          alt="Your Image"
          style={{
            width: "100%",
            maxWidth: { xs: "350px", sm: "550px" },
            height: "auto",
            
          }}
        />
      </Box>
    </Stack>
  );
}

export default Header;
