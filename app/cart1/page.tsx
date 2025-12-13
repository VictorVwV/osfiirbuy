"use client";

import Navbar from "../Navbar";
import { addToCart } from "../cart";

export default function Cart1() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>Cart1 Page 🛒</h1>
        <p>This is your custom cart1 route. You can add products or show cart details here.</p>
      </main>
    </>
  );
}