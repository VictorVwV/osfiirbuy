"use client"; 

import { collection, addDoc } from "firebase/firestore";
import { db } from "./src/firebase"; 

export async function addToCart(product) {
  try {
    const docRef = await addDoc(collection(db, "cart"), {
      name: product.name,
      price: product.price,
      image: product.image,
      timestamp: new Date()
    });
    console.log("Item added to cart with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}