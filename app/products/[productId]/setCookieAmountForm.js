'use client';
import { useState } from 'react';
import { createCookieAmount } from './action';

// Import the server-side action that will be called to set the cookie amount.

export default function SetCookieAmountForm({ productId }) {
  // This component receives the productId as a prop, which will be used to identify the specific product.
  const [cookieAmountValue, setCookieAmountValue] = useState(1); // Initialize the local state to store the cookie amount (starting at 1).

  return (
    <form>
      {/* Display the current value of cookieAmountValue */}
      {/* Increment Button */}
      <button
        className="plusAndMinusBtn"
        onClick={(event) => {
          event.preventDefault();
          setCookieAmountValue(cookieAmountValue + 1);
        }} // Increment the cookieAmountValue by 1 when the button is clicked.
      >
        +
      </button>
      {cookieAmountValue}
      {/* Decrement Button */}
      <button
        className="plusAndMinusBtn"
        onClick={(event) => {
          event.preventDefault();
          if (cookieAmountValue > 1) {
            setCookieAmountValue(cookieAmountValue - 1); // Decrement the value only if it's greater than 0 (no negative values).
          }
        }}
      >
        -
      </button>
      <button
        className="addToCartBtn"
        formAction={async () =>
          await createCookieAmount(cookieAmountValue, productId)
        }
        style={{
          marginTop: '5px',
        }}
      >
        Add to Cart
      </button>
    </form>
  );
}
