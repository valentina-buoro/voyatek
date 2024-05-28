import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ user }: any) => {
  return (
    <div className="">
      <div className="flex justify-between bg-yellow-100 p-3 rounded-md shadow-md ">
        <div className=" h-[150px] self-center">
          <Image
            width={100}
            height={100}
            className=""
            src={user.picture.medium}
            alt="pic"
          />
        </div>
        <div className="py-2 md:py-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className=" ">
              <p className="font-semibold align-middle text-base pb-1 md:pb-2">
                {" "}
                <span>{user.name.title}</span>
                <span>{user.name.first}</span>
                <span>{user.name.last}</span>
              </p>
              <p className="font-semibold align-middle text-lg pb-1 md:pb-2">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
