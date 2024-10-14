import Link from 'next/Link';

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/category">Category</Link>
        <Link href="/products">Products</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </div>
  );
}
