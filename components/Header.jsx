"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useTheme } from "next-themes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const blurHeader = () => {
      window.scrollY >= 50 ? setIsBlur(true) : setIsBlur(false);
    };
    window.addEventListener("scroll", blurHeader);
    return () => window.removeEventListener("scroll", blurHeader);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollDown = window.scrollY;
      let active = "";
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          active = sectionId;
        }
      });
      setActiveSection(active);
    };

    window.addEventListener("scroll", scrollActive);
    // Initial check
    scrollActive();
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  return (
    <header className={`header ${isBlur ? "blur-header" : ""}`} id="header">
      <nav className="nav container">
        <Link href="#" className="nav__logo">
          CodeZenic.
        </Link>
        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                href="#home"
                className={`nav__link ${activeSection === "home" ? "active-link" : ""}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#about"
                className={`nav__link ${activeSection === "about" ? "active-link" : ""}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#projects"
                className={`nav__link ${activeSection === "projects" ? "active-link" : ""}`}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#work"
                className={`nav__link ${activeSection === "work" ? "active-link" : ""}`}
                onClick={closeMenu}
              >
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#services"
                className={`nav__link ${activeSection === "services" ? "active-link" : ""}`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                href="#contact"
                className={`nav__link ${activeSection === "contact" ? "active-link" : ""}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Close button */}
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
          {/* Theme button */}
          {mounted && (
            <i
              className={theme === "light" ? "ri-moon-line" : "ri-sun-line"}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              style={{
                fontSize: "1.25rem",
                color: "var(--title-color)",
                cursor: "pointer",
              }}
            ></i>
          )}

          {/* Toggle button */}
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="ri-apps-2-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
