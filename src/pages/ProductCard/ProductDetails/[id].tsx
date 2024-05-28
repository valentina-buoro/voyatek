import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";

const Card = ({ product }: any) => {
  const params = useParams<{ id: string }>();
  console.log(params?.id);

  const [products, setProducts] = React.useState({
    id: "",
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setError(false);
    setProducts({
      id: "",
      title: "",
      price: "",
      description: "",
      image: "",
    });
    try {
      const response: any = await axios.get(
        `https://fakestoreapi.com/products/${params?.id}`
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
    <div className="cursor-pointer">
      <div className="mx-10 md:mx-20 my-10 flex flex-col justify-between  bg-white h-[300px] md:h-[350px] p-3 rounded-md shadow-md ">
        <div className=" h-[150px] self-center">
          <Image
            width={200}
            height={100}
            className=""
            src={products?.image}
            alt="pic"
          />
        </div>

        <div className="py-2 md:py-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className=" ">
              <p className="font-semibold align-middle text-base pb-1 md:pb-2">
                {products?.title}
              </p>
              <p className="font-semibold align-middle text-lg pb-1 md:pb-2">
                $ {products?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
