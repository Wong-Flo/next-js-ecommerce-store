import Image from 'next/image';
import React from 'react';
import { getProduct } from '../database/productlist';

export async function generateMetadata(props) {
  const singleProduct = getProduct(Number((await props.params).productId));
  return {
    title: singleProduct.productName,
    description: 'Single Product Item ',
  };
}

export default async function singleProductPage(props) {
  const singleProduct = getProduct(Number((await props.params).productId));
  return (
    <div>
      <h2>Item Page for {singleProduct.productName}</h2>
      <Image
        src={`/images/${singleProduct.productName.toLowerCase()}.jpg`}
        alt={singleProduct.productName}
        width={200}
        height={250}
      />
      <h4>Price: </h4>
      <h5>{singleProduct.price}</h5>
      <h4>Description:</h4> <h5>{singleProduct.description}</h5>
    </div>
  );
}
