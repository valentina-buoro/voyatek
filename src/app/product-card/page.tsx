"use client";
import Card from "@/components/ProductCard/card";
import React, { useEffect } from "react";
import "../globals.css";
import axios from "axios";

const ProductCard = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setError(false);
    setProducts([]);
    try {
      const response: any = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
      if (response.data) {
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <p className="font-bold text-3xl">Product Details</p>
      {loading && (
        <div>
          <p className="font-bold text-4xl text-center mt-14 m">Loading...</p>
        </div>
      )}

      {error && (
        <p className="font-bold text-4xl text-red-900 text-center mt-14 m">
          Error fetching data
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
        {products &&
          products?.map((product: any) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductCard;