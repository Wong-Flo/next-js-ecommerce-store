import Image from 'next/image';
import React from 'react';
import { getProduct } from '../database/productlist';
import SetCookieAmountForm from './setCookieAmountForm';

export async function generateMetadata(props) {
  const singleProduct = getProduct(Number((await props.params).productId));
  // Retrieve the product using the productId from the route parameters.

  return {
    title: singleProduct.productName,
    description: 'Single Product Item ',
  };
}

export default async function singleProductPage(props) {
  // This is the main page component for displaying a single product.

  const singleProduct = getProduct(Number((await props.params).productId));
  // Retrieve the product data using the productId from the dynamic route (props.params).

  return (
    <>
      <div className="xLarge">
        <h1>Item Page for {singleProduct.productName}</h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="container"
      >
        <div data-test-id="product-<product id>" className="productDisplay">
          <Image
            src={`/images/${singleProduct.productName.toLowerCase()}.jpg`}
            alt={singleProduct.productName}
            width={200}
            height={250}
          />
          {/* Display the product price */}
          <h4>Price:</h4>
          <h5>{singleProduct.price}</h5>

          {/* Show the product's price. The price is retrieved from the product object. */}

          {/* Display the product description */}
          <h4>Description:</h4>
          <h5>{singleProduct.description}</h5>
          {/* Show the product's description retrieved from the product object. */}

          {/* Render the form where users can set the cookie amount for this product */}
          <SetCookieAmountForm productId={singleProduct.id} />
        </div>
      </div>
    </>
  );
}
