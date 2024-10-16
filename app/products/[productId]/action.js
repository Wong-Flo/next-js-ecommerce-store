'use server';
import { cookies } from 'next/headers';
import { getProduct } from '../database/productlist';

export async function createCookieAmount(props, cookieAmountValue) {
  const singleProduct = getProduct(Number((await props.params).productId));
  return (await cookies()).set(
    `${singleProduct.id}`,
    cookieAmountValue.toString(),
  );
}

// Set a cookie named 'CookieAmount' with the value passed in as 'cookieAmountValue'.
// The cookie value is converted to a string because cookies must store data in string format.

/*  change and connect cookie name to singleProduct.id

search for cookieAmount to change name more than 1 place uses this
*/

//MAKE cookieNAME dynamic
