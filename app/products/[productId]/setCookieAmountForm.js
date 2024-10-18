'use client';
import { useState } from 'react';
import { createCookieAmount } from './action'; // Import the server-side action that will be called to set the cookie amount.

export default function SetCookieAmountForm({ productId }) {
  // This component receives the productId as a prop, which will be used to identify the specific product.
  const [cookieAmountValue, setCookieAmountValue] = useState(0); // Initialize the local state to store the cookie amount (starting at 0).

  return (
    <form>
      {/* Display the current value of cookieAmountValue */}

      {/* Increment Button */}
      <button
        className="plusAndMinusBtn"
        formAction={
          async () => await createCookieAmount(cookieAmountValue, productId) // This async function will call the server action to update the cookie amount with the current value and productId.
        }
        onClick={() => setCookieAmountValue(cookieAmountValue + 1)} // Increment the cookieAmountValue by 1 when the button is clicked.
      >
        +
      </button>
      {cookieAmountValue}

      {/* Decrement Button */}
      <button
        className="plusAndMinusBtn"
        formAction={
          async () => await createCookieAmount(cookieAmountValue, productId) // Call the server action to update the cookie amount with the current value and productId.
        }
        onClick={
          () =>
            cookieAmountValue > 0 && setCookieAmountValue(cookieAmountValue - 1) // Decrement the value only if it's greater than 0 (no negative values).
        }
      >
        -
      </button>
    </form>
  );
}
