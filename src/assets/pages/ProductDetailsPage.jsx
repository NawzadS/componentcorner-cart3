import { useParams, Link } from "react-router-dom";

export default function ProductDetailsPage({ products, addToCart }) {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <main style={{ padding: "1.25rem" }}>
        <h1>Product not found</h1>
        <Link to="/products">Back to Products</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "1.25rem" }}>
      <Link to="/products">← Back to Products</Link>

      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>

      <button onClick={() => addToCart(product.id)} style={{ cursor: "pointer" }}>
        Add to Cart
      </button>
    </main>
  );
}
