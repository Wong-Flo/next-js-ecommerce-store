'use server';
import { cookies } from 'next/headers';

export async function createCookieAmount(cookieAmount, productId) {
  (await cookies()).set(
    'cookieAmount',
    JSON.stringify([
      {
        Id: productId,
        Amount: cookieAmount,
      },
    ]),
  );
}

// Set a cookie named 'CookieAmount' with the value passed in as 'cookieAmountValue'.
// The cookie value is converted to a string because cookies must store data in string format.

/*  change and connect cookie name to singleProduct.id

search for cookieAmount to change name more than 1 place uses this
*/

// MAKE cookieNAME dynamic
