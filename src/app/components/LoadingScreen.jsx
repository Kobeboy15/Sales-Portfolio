"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // handles the display of the content //
    const heroContent = document.getElementById("hero-content");
    const scrollContent = document.getElementById("scroll-content");
    if (localStorage.getItem("hasVisited")) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        // Simulated loading for first time visitor //
        localStorage.setItem("hasVisited", true);
        setIsLoading(false);
      }, 3500);
    }
    document.body.style.overflow = "auto";
    heroContent.style.display = "flex";
    scrollContent.style.display = "block";
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 z-30 w-full h-screen dark:bg-background bg-white ${
        isLoading ? "block" : "fadeOutAnimation"
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <div className="loader"></div>
      </div>
    </div>
  );
}
