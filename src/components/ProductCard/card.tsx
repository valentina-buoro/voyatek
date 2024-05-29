import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  product: {
    image: string;
    id: string;
    title: string;
    price: string;
  };
};

const Card = ({ product }: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex w-full justify-center bg-white rounded-t-lg">
        <img
          className="rounded-t-lg w-fit max-h-52 h-full"
          src={product.image}
          alt=""
        />
      </div>

      <div className="p-5 flex flex-col  h-[200px] justify-between ">
        <div className="">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            $ {product.price}
          </p>
        </div>
        <div className="flex w-full items-center justify-between gap-x-2">
          <Link
            href={`/product-card/product-details/${product.id}`}
            className="w-full"
          >
            <button className=" px-3 py-2 w-full text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              Buy
            </button>
          </Link>
          <Link
            href={`/product-card/product-details/${product.id}`}
            className="w-full"
          >
            <button className=" w-full px-3 py-2 text-sm font-medium text-blue-700  bg-white rounded-sm hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
              View Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;