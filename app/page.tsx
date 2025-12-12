import Image from "next/image";
/*

cd C:\Users\User\Desktop\OSFIIR\osfiir
npm run dev
*/
export default function Home() {
    return (
        <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
<h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
  Welcome to OSFIIR E-Commerce 🛒
</h1>


  <p style={{ marginBottom: "40px" }}>
    Browse our latest products and enjoy fast delivery.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    }}
  >
    {/* Example product */}
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Image
        src="/product1.jpeg"
        alt="Product 1"
        width={300}
        height={200}
      />
      <h3>Product Name</h3>
      <p>$29.99</p>
      <button
  style={{
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }}
>
  Add to Cart
</button>
    </div>
  </div>
</main>
    )
}
