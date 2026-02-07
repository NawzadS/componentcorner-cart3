import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3 style={{ margin: 0 }}>{product.name}</h3>
      </Link>

      <p style={{ margin: 0 }}>${product.price}</p>

      <button
        onClick={() => addToCart(product.id)}
        style={{
          marginTop: "auto",
          padding: "0.5rem",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
