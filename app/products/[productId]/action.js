'use server';
import { cookies } from 'next/headers';

export async function createCookieAmount(cookieAmount, productId) {
  const checkCookie = (await cookies()).get('cookieAmount');
  let cookieArray = [];

  // If cookie exists, parse it
  if (checkCookie) {
    cookieArray = JSON.parse(checkCookie.value);
  }

  // Check if the productId already exists in the array
  const existingCookie = cookieArray.find((item) => item.Id === productId);

  if (existingCookie) {
    // If the product exists, update its amount
    existingCookie.Amount = cookieAmount;
  } else {
    // If it doesn't exist, push a new entry
    cookieArray.push({
      Id: productId,
      Amount: cookieAmount,
    });
  }

  // Set the updated cookie
  await cookies().set('cookieAmount', JSON.stringify(cookieArray));
}
