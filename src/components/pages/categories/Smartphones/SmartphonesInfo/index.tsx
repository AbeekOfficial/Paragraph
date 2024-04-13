import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SmartphonesInfo() {
  const [productsInfo, setProductsInfo] = useState([]);
  const { productID } = useParams(); // Assuming you have a route parameter named productID

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/smartphones/${productID}`)
      .then((res) => {
        setProductsInfo(res.data.productsInfo);
      })
      .catch((err) => {
        console.log("ERROR MESSAGE", err);
      });
  }, [productID]); // Include productID in the dependency array to re-fetch data when it changes

  return (
    <div className="container">
      {productsInfo.map((e) => (
        <div key={e.id}>
          <img src={e.images} alt="" />
          <div>{e.title}</div>
          <div>{e.description}</div>
        </div>
      ))}
    </div>
  );
}
