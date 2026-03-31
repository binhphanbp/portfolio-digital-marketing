"use client";
import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let hasMoved = false;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        followerX = mouseX;
        followerY = mouseY;
        hasMoved = true;
      }

      // Cursor moves instantly
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    let animationFrame;
    const render = () => {
      // Follower uses linear interpolation for smooth trailing effect
      // Increased from 0.15 to 0.3 for a more responsive trail
      followerX += (mouseX - followerX) * 0.3;
      followerY += (mouseY - followerY) * 0.3;

      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";

      animationFrame = requestAnimationFrame(render);
    };

    render();

    // Event delegation for hover effect on interactive/dynamic elements
    const handleMouseOver = (e) => {
      if (
        e.target.closest(
          "a, button, .services__item, .work__button, .projects__card"
        )
      ) {
        follower.classList.add("hover");
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.closest(
          "a, button, .services__item, .work__button, .projects__card"
        )
      ) {
        follower.classList.remove("hover");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" id="cursor-follower" ref={followerRef}></div>
    </>
  );
}
