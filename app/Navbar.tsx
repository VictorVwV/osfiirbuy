import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position:"fixed",
        display: "flex",
        width:"100%",
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
      <Link href="/authentification" style={{ textDecoration: "none", color: "#333", fontSize: "24px" }}>
        Log in
      </Link>
      <Link href="/cart1" style={{ textDecoration: "none", color: "#333", fontSize: "20px" }}>
        Cart
      </Link>
      <Link href="https://www.youtube.com/watch?v=hhuEsj93Q1U" style={{ textDecoration: "none", color: "#333", fontSize: "20px" }}>
        Cart2
      </Link>
    </nav>
  );
}