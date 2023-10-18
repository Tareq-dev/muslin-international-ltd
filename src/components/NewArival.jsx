import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import hero3 from "../assets/images/hero3.png";

function NewArival() {
  const buttonStyle = {
    border: `1px solid #ee2761`,
    color: "#ee2761",
    marginTop: "20px",
  };
  return (
    <Stack
      bgcolor="#d4f8fc"
      direction="row"
      my={22}
      spacing={4}
      justifyContent="space-between"
    >
      <Box
        sx={{
          height: "400px",
          width: "50%",
          position: "relative",
          marginTop: "80px",
        }}
      >
        <img
          src={hero3}
          alt="hero"
          style={{
            width: "",
            height: "550px",
            padding: "0px 15px 0px 10px",
            position: "absolute",
            top: "-150px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Box
          sx={{
            padding: "18px",
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            New Arrivals for Clothings
          </Typography>
          <Typography
            variant="subtitle1"
            color="gray"
            textAlign="justify"
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, minima sint aliquid odit dolor quia. Laboriosam
            velit sapiente eius autem repellat excepturi temporibus commodi
            tenetur.
          </Typography>
          <Button variant="outlined" style={buttonStyle}>
            View Details
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}

export default NewArival;
