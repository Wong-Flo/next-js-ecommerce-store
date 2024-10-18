import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from './database/productlist';

export const metadata = {
  title: 'Products',
  description: 'Generated by create next app',
};

export default function ProductPage() {
  const products = getProducts();
  return (
    <div>
      <div className="xLarge">
        <h1>Product Page</h1>
      </div>
      <div className="container">
        {products.map((product) => {
          return (
            <div className="small" key={`products-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                <Image
                  src={`/images/${product.productName.toLowerCase()}.jpg`}
                  alt={product.productName}
                  width={200}
                  height={250}
                />
              </Link>
              <div
                style={{
                  marginTop: '15px',
                }}
              >
                {product.productName}
              </div>
              <button className="addToCartBtn">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
