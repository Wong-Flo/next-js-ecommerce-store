'use client';

import { RemoveItemFromCart } from './action.js';

export default function UpdateCart({ productId }) {
  return (
    <form>
      <button formAction={async () => await RemoveItemFromCart(productId)}>
        Remove
      </button>
    </form>
  );
}
