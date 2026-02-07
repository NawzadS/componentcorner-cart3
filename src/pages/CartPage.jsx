import CartItem from "../components/CartItem.jsx";

export default function CartPage({ products, cart, addToCart, removeFromCart, clearCart }) {
  const entries = Object.entries(cart);

  if (entries.length === 0) {
    return (
      <main style={{ padding: "1.25rem" }}>
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "1.25rem" }}>
      <h1>Cart</h1>

      <div style={{ display: "grid", gap: "0.75rem" }}>
        {entries.map(([id, qty]) => {
          const product = products.find((p) => p.id === Number(id));
          if (!product) return null;

          return (
            <CartItem
              key={id}
              product={product}
              quantity={qty}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>

      <button onClick={clearCart} style={{ marginTop: "1rem", cursor: "pointer" }}>
        Clear Cart
      </button>
    </main>
  );
}
