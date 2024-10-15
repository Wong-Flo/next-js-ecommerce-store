'use server';
import { cookies } from 'next/headers';

export async function createCookieAmount(cookieAmountValue) {
  (await cookies()).set('testCookie', cookieAmountValue);
}
