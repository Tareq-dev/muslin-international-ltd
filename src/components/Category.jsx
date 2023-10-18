import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Man3Icon from "@mui/icons-material/Man3";
import Woman3Icon from "@mui/icons-material/Woman2";
import men from "../assets/images/man.jpg";
import woman from "../assets/images/woman.jpg";
import electronics from "../assets/images/electronics.jpg";
import jewelary from "../assets/images/jewelary.jpg";

function Category() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  //   console.log(data.map(c=>c.category));
  return (
    <Box sx={{ my: 10 }}>
      <Typography variant="h4" fontWeight="bold">
        Popular Category
      </Typography>
      <Stack sx={{ my: 10 }} direction="row" spacing={4} justifyContent="center">
        <Box
          sx={{
            width: "200px",
            height: "200px",
            border: "2px solid #ee2761",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", my: "16px" }}>
            <img
              src={men}
              alt="men"
              style={{
                width: "80px",
                height: "80px",
                padding: "0px 15px 0px 10px",
              }}
            />
          </Box>
          <Typography variant="h5" textAlign="center">
            Men
          </Typography>
          <Typography variant="h6" textAlign="center" color="#a19fa3">
            1.2k products
          </Typography>
        </Box>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            border: "2px solid #ee2761",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", my: "16px" }}>
            <img
              src={woman}
              alt="women"
              style={{
                width: "80px",
                height: "80px",
                padding: "0px 15px 0px 10px",
              }}
            />
          </Box>
          <Typography variant="h5" textAlign="center">
            Women
          </Typography>
          <Typography variant="h6" textAlign="center" color="#a19fa3">
            1.5k products
          </Typography>
        </Box>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            border: "2px solid #ee2761",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", my: "16px" }}>
              <img
                src={jewelary}
                alt="jewelary"
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "0px 15px 0px 10px",
                }}
              />
            </Box>
          </Box>
          <Typography variant="h5" textAlign="center">
            Jewelery
          </Typography>
          <Typography variant="h6" textAlign="center" color="#a19fa3">
            1.2k products
          </Typography>
        </Box>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            border: "2px solid #ee2761",
            borderRadius: "15px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", my: "16px" }}>
              <img
                src={electronics}
                alt="electronics"
                style={{
                  width: "80px",
                  height: "80px",
                  padding: "0px 15px 0px 10px",
                }}
              />
            </Box>
          </Box>
          <Typography variant="h5" textAlign="center">
            Electronics
          </Typography>
          <Typography variant="h6" textAlign="center" color="#a19fa3">
            1.8k products
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Category;
