import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#1005a1ff",
        fontFamily: "sans-serif",
        borderBottom: "1px solid #ffffffff",
        zIndex: 1000,
      }}
    >
      <Link href="/">
        <Image
          src="/logoOS.png"
          alt="OSFIIR Logo"
          width={120}
          height={60}
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Link href="/authentification" >
           <Image
          src="/profil.png"
          alt="profil"
          width={20}
          height={60}
          style={{ cursor: "pointer" }}
        />
        </Link>

        <Link href="/cart1" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#333" }}>
          <Image
            src="/cos.png"
            alt="Cart"
            width={30}
            height={30}
            style={{ marginRight: "8px" }}
          />
        </Link>
      </div>
    </nav>
  );
}