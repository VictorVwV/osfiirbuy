import Image from "next/image";

export default function Home() {
    return (
        <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
<h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
Welcome to OSFIIR E-Commerce 🛒



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
        src="/product1.jpg"
        alt="Product 1"
        width={300}
        height={200}
      />
      <h3>Product Name</h3>
      <p>$29.99</p>
      <button>Add to Cart</button>
    </div>
  </div>
</main>
    )
}
