"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Home() {
  const products = [
    { name: "Halba", price: 50, image: "./halbaO.jpg", description: "Nu fii ca orice betiv de pretutindeni, fii betiv unicat cu halba OSFIIR. E frumoasă, e tot ce vrei de la viață" },
    { name: "T-shirt", price: 70, image: "/product2.jpg", description: "Un pulover"  },
    { name: "Pullover", price: 90, image: "/product3.jpg",description:"Un tricou"  },
  ];

  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1 style={{ marginTop: "5%", fontSize: "36px", 
          marginBottom: "20px",
          }}>
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
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
             <Link
              href={`/produsul?name=${product.name}&price=${product.price}&image=${product.image}&description=${encodeURIComponent(product.description)}`}
              style={{ textDecoration: "none", color: "inherit" }}
              >
                <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                style={{ borderRadius: "4px", cursor: "pointer" }}
                />
              </Link>

              <Link
              href={`/produsul?name=${product.name}&price=${product.price}&image=${product.image}&description=${encodeURIComponent(product.description)}`}
              style={{ textDecoration: "none", color: "inherit" }}
              >
              <h3
              style={{
              marginTop: "10px",
             fontSize: "18px",
             fontWeight: "bold",
              }}
              >
              {product.name}
              </h3>
              </Link>
              <p
                style={{
                  color: "#333",
                  marginTop: "8px",
                  fontSize: "16px",
                }}
              >
                {product.price} RON
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}