"use client";

import Navbar from "../../Navbar";

export default function Authentification() {
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
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "40px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "28px", textAlign: "center" }}>
            Log In to OSFIIR
          </h2>

          <form>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px" }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />

            <label htmlFor="password" style={{ display: "block", marginBottom: "8px" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "30px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Log In
            </button>
          </form>
        </div>
      </main>
    </>
  );
}