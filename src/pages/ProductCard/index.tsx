import Card from "@/components/ProductCard/card";
import React, { useEffect } from "react";
import "../globals.css";
import useRequest from "@/hooks/useRequest";
import axios from "axios";

const LandingPage = () => {
  const [products, setProducts] = React.useState([]);
  const { makeRequest } = useRequest("products", "GET");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const response: any = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    console.log(products);
    console.log(response.data);
  };

  return (
    <div className="bg-red-500">
      <p className="font-bold text-3xl">Product Details</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
    {products && products?.map((product: any) => (
      <Card key={product.id} product={product} />
    ))}
    </div>
    </div>
  );
};

export default LandingPage;
