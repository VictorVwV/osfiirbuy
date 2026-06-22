"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { addToCart } from "../cart";

export default function ProdusulContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const image = searchParams.get("image");
  const description = searchParams.get("description");

  const handleAddToCart = () => {
    addToCart({ name, price, image });
  };

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ marginTop: "5%", fontSize: "32px", marginBottom: "20px" }}>
        {name}
      </h1>

      <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
        {image && (
          <Image
            src={image}
            alt={name || "Product"}
            width={400}
            height={300}
            style={{ borderRadius: "8px" }}
          />
        )}

        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>{price} RON</p>

          {/* Dynamic description */}
          <p
            style={{
              width: "100%",
              minHeight: "120px",
              padding: "12px",
              fontSize: "16px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginBottom: "20px",
            }}
          >
            {description}
          </p>

          <button
            onClick={handleAddToCart}
            style={{
              padding: "12px 24px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}