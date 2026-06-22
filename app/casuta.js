"use client";

import Image from "next/image";
import Link from "next/link";

export default function Casuta({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <Link href={`/produsul?name=${product.name}&price=${product.price}&image=${product.image}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          style={{ borderRadius: "4px", cursor: "pointer" }}
        />
      </Link>
      <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
      <p style={{ color: "#555" }}>{product.price} RON</p>
    </div>
  );
}