import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { UpdateCart } from '../cart/RemoveItemFromCart.js';
import { getProduct } from '../products/database/productlist';

export const metadata = {
  title: 'cart',
  description: 'This is the Cart Page',
};

// Utility function to fetch and parse cart items from cookies
async function getCartItemsFromCookies() {
  const displayCookie = (await cookies()).get('cookieAmount'); // Get the cookie
  let cartItems = [];

  if (displayCookie) {
    cartItems = JSON.parse(displayCookie.value); // Parse the cookie value if present
  }
  return cartItems; // Return the cart items array
}

// CartItem Component
export default async function CartItem() {
  const cartItems = await getCartItemsFromCookies(); // Fetch the cart items from cookies
  let totalSum = 0;

  return (
    <>
      <div className="xLarge">
        <h1>Cart Page</h1>
      </div>
      <div className="cartItems">In your Shopping Cart:</div>

      {/* Check if cartItems array has any items */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => {
          const product = getProduct(item.Id);
          const totalAmount = product.price * item.Amount;
          totalSum += totalAmount;
          return (
            <div key={`items-${item.Id}`}>
              <div
                className="long"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '20px',
                  paddingTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <Image
                  src={`/images/${product.productName.toLowerCase()}.jpg`}
                  alt={product.productName}
                  width={100}
                  height={125}
                />
                <h4>{product.productName}</h4>
                <p style={{}}>Single Price: €{product.price}</p>

                <p>
                  Quantity:
                  {item.Amount}
                </p>
                <p>Total: {totalAmount.toFixed(2)}</p>
                {/*  <UpdateCart /> */}
              </div>
            </div>
          );
        })
      ) : (
        <p>Your cart is empty</p>
      )}
      {cartItems.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '20px',
            fontWeight: 'bold',
            width: '75%',
            height: '150px',
            backgroundColor: 'lightgrey',
            color: 'black',
            borderRadius: '15px',
            padding: '10px',
            margin: '20px',
          }}
        >
          Total Amount for Cart:
          <p>${totalSum.toFixed(2)}</p>
          <div>
            <Link
              href="/cart/checkout"
              style={{
                backgroundColor: 'green',
                padding: '0.5rem',
                borderRadius: '15px',
              }}
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
