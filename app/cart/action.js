'use server';
import { cookies } from 'next/headers';

export async function RemoveItemFromCart(cookieAmount, productId) {
  const cookie = (await cookies()).get('cookieAmount');
  let cartItems = [];

  if (cookie) {
    cartItems = JSON.parse(cookie.value);
  }
  const newCart = cartItems.filter((item) => item.Id !== productId);
  if (newCart) {
    newCart.Amount = cookieAmount;
  }
  await cookies().set('cookieAmount', JSON.stringify(cartItems));
}
