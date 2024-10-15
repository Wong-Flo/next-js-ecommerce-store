'use client';
import { useState } from 'react';
import { createCookieAmount } from './action';

export default function SetCookieAmountForm() {
  const [cookieAmountValue, setCookieAmountValue] = useState(0);
  return (
    <form>
      {cookieAmountValue}
      <button
        formAction={() => createCookieAmount()}
        onClick={() => setCookieAmountValue(cookieAmountValue + 1)}
      >
        +
      </button>
      <button
        formAction={() => createCookieAmount()}
        onClick={() => setCookieAmountValue(cookieAmountValue - 1)}
      >
        -
      </button>
    </form>
  );
}
