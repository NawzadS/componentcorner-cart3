export default function CartItem({ product, quantity, addToCart, removeFromCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <h3 style={{ margin: 0 }}>{product.name}</h3>
      <p style={{ margin: 0 }}>${product.price}</p>
      <p style={{ margin: 0 }}>Quantity: {quantity}</p>

      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
        <button onClick={() => removeFromCart(product.id)} style={{ cursor: "pointer" }}>
          -
        </button>
        <button onClick={() => addToCart(product.id)} style={{ cursor: "pointer" }}>
          +
        </button>
      </div>
    </div>
  );
}
