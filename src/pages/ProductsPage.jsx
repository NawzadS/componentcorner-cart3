import ProductCard from "../components/ProductCard.jsx";

export default function ProductsPage({ products, addToCart }) {
  return (
    <main style={{ padding: "1.25rem" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
