import React from "react";
import Features from "./Features";

export default function FeaturesSection() {
  return (
    <section className="bg-white py-12 px-4">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-15">
        Get Hired Faster With{" "}
        <span className="text-red-500">MyPerfectResume</span>
      </h2>

      <Features/>
    </section>
  );
}
