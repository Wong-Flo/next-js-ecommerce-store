'use server';
import { cookies } from 'next/headers';
import { getProduct } from '../database/productlist.js';

export async function createCookieAmount(cookieAmountValue, productId) {
  const product = getProduct(productId);
  const cookieStore = cookies();
  (await cookieStore).set('CookieAmount', cookieAmountValue.toString());
}
// change connect cookie name to singleProduct.id
