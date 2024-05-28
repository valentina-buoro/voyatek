import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({product}: any) => {
  return (
    <div className=''>
      <div className="flex flex-col justify-between bg-white h-[300px] md:h-[350px] p-3 rounded-md shadow-md ">
      <div className=" h-[150px] self-center">
        <Image width={100} height={100} className="" src ={product.image} alt="pic" />
      </div>
     <div className="py-2 md:py-4">
     <div className="flex flex-col md:flex-row md:justify-between">
      <div className=" ">
        <p className="font-semibold align-middle text-base pb-1 md:pb-2">{product.title}</p>
      <p className="font-semibold align-middle text-lg pb-1 md:pb-2">$ {product.price}</p>
      </div>
       
      </div>
      <div className="text-normal text-sm text-gray-500 pt-2 md:pt-4 " onClick={()=>{}}>
        <Link href='/' className='text-gray-500'>Product Details</Link>
      </div>
     </div>
      

    </div>
    </div>
  )
}

export default Card