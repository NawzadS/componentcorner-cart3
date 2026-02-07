import { Link, NavLink } from "react-router-dom";

export default function Header({ cartCount = 0 }) {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontWeight: isActive ? 800 : 600,
    color: "inherit",
  });

  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link to="/" style={{ fontWeight: 900, textDecoration: "none" }}>
          ComponentCorner
        </Link>

        <NavLink to="/" end style={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/products" style={linkStyle}>
          Products
        </NavLink>

        <NavLink to="/cart" style={linkStyle}>
          Cart ({cartCount})
        </NavLink>
      </nav>
    </header>
  );
}
