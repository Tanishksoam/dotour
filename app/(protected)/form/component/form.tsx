"use client"

import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup to prevent script duplication
    };
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div data-tf-live="01JD0DRCREQVW554983D8SPX97"></div>
      </section>
    </main>
  );
}

export default MyComponent;
