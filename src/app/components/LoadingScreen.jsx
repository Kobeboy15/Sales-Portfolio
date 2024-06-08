"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [zLayerSet, setZLayerSet] = useState(false);

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

  // To delay the effect of the -z-10 class to allow for smooth FadeIn animation //
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setZLayerSet(true);
      }, 800);
    }
  }, [isLoading]);

  return (
    <div
      className={`absolute top-0 left-0 ${
        !zLayerSet ? "z-30" : "-z-10"
      } w-full h-screen dark:bg-background bg-white ${
        isLoading ? "block" : "fadeOutAnimation"
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <div className="loader"></div>
      </div>
    </div>
  );
}
