import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";

import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const CART_STORAGE_KEY = "componentcorner_cart_v1";

export default function App() {
  const products = [
    { id: 1, name: "Keyboard", price: 29.99, description: "A solid keyboard." },
    { id: 2, name: "Mouse", price: 19.99, description: "Smooth and responsive." },
    { id: 3, name: "Monitor", price: 199.99, description: "Crisp display." }
  ];

  const [cart, setCart] = useState(() => {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  function addToCart(productId) {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1
    }));
  }

  function removeFromCart(productId) {
    setCart((prev) => {
      const current = prev[productId] ?? 0;

      if (current <= 1) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }

      return { ...prev, [productId]: current - 1 };
    });
  }

  function clearCart() {
    setCart({});
  }

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
        <Route path="/products/:productId" element={<ProductDetailsPage products={products} addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              products={products}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
