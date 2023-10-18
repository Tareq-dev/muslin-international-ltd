import React from "react";
import React, { useEffect, useState } from "react";

function FeaturedItem() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return <Box></Box>;
}

export default FeaturedItem;
