"use client";

import { Suspense } from "react";
import Navbar from "../Navbar";
import ProdusulContent from "./ProdusulContent";

export default function ProdusulPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading product...</div>}>
        <ProdusulContent />
      </Suspense>
    </>
  );
}