"use client";

import Link from "next/link";
import Navbar from "../Navbar";
import { auth, googleProvider } from "../src/firebase";
import { signInWithPopup } from "firebase/auth";

export default function Authentification() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("User info:", user);
      // Here you can send user info to your Firestore database
      // e.g., save user.uid, user.email, user.displayName
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "sans-serif",
          backgroundColor: "#1a1a1a",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "40px",
            backgroundColor: "#2c2c2c",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
            color: "#fff",
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "28px", textAlign: "center" }}>
            Log In to OSFIIR
          </h2>

          <Link href="/authentification/email">
            <button
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Log in with Email
            </button>
          </Link>

          <button
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#db4437",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={handleGoogleLogin}
          >
            Log in with Google
          </button>
        </div>
      </main>
    </>
  );
}