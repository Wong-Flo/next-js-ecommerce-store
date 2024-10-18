// import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function NavBar() {
  // const totalItemsInCart = (await cookies()).get('cookieAmount');
  return (
    <div>
      <nav>
        <Link className="navBarItem" href="/">
          Home
        </Link>
        <Link className="navBarItem" href="/products">
          Products
        </Link>
        <Link className="navBarItem" href="/category">
          Category
        </Link>

        <Link className="navBarItem" href="/blog">
          Blog
        </Link>
        <Link className="navBarItem" href="/about">
          About
        </Link>
        <Link className="cartTop" href="/cart">
          Cart
        </Link>
      </nav>
    </div>
  );
}
/*  change and connect cookie name to singleProduct.id

search for cookieAmount to change name more than 1 place uses this
*/
