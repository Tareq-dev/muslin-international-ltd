import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Man3Icon from "@mui/icons-material/Man3";
function Category() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  //   console.log(data.map(c=>c.category));
  return (
    <Box sx={{ my: 6 }}>
      <Typography variant="h4" fontWeight="bold">
        Popular Category
      </Typography>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Box
          sx={{
            width: "200px",
            height: "200px",
            border: "2px solid gray",
            borderRadius: "15px",
          }}
        >
          <Man3Icon />
        </Box>
      </Stack>
    </Box>
  );
}

export default Category;
