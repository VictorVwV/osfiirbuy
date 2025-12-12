import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#f5f5f5",
        fontFamily: "sans-serif",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "#333", fontSize: "24px" }}>
        Home
      </Link>

      <Link href="/cart" style={{ textDecoration: "none", color: "#333", fontSize: "20px" }}>
        Cart
      </Link>
    </nav>
  );
}