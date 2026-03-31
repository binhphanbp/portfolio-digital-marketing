"use client";
import React, { useState, useEffect } from "react";

export default function ScrollUp() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      setScrollProgress(progress);

      // Show scroll button if scrolled past 350px
      if (scrollY >= 350) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circle properties
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  // Offset based on progress
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`scrollup ${showScroll ? "show-scroll" : ""}`}
      onClick={scrollToTop}
    >
      <svg className="scrollup__svg" width="54" height="54" viewBox="0 0 54 54">
        {/* Background track */}
        <circle
          className="scrollup__circle-base"
          cx="27"
          cy="27"
          r={radius}
        ></circle>
        {/* Progress stroke */}
        <circle
          className="scrollup__progress"
          cx="27"
          cy="27"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        ></circle>
      </svg>
      {/* Center Icon */}
      <i className="ri-arrow-up-line scrollup__icon"></i>
    </div>
  );
}
