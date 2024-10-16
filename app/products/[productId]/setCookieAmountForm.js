'use client';
import { useState } from 'react';
import { createCookieAmount } from './action';

export default function SetCookieAmountForm({ productId }) {
  const [cookieAmountValue, setCookieAmountValue] = useState(0);
  return (
    <form>
      {cookieAmountValue}
      <button
        formAction={async () =>
          await createCookieAmount(cookieAmountValue, productId)
        }
        onClick={() => setCookieAmountValue(cookieAmountValue + 1)}
      >
        +
      </button>
      <button
        formAction={async () =>
          await createCookieAmount(cookieAmountValue, productId)
        }
        onClick={() =>
          cookieAmountValue > 0 && setCookieAmountValue(cookieAmountValue - 1)
        }
      >
        -
      </button>
    </form>
  );
}
