"use client";
import React, { useEffect } from "react";
import anime from "animejs";

export default function Home() {
  useEffect(() => {
    // Split text animation for "Creative"
    const splitText = document.getElementById("home-split");

    if (splitText) {
      const text = splitText.textContent;
      splitText.innerHTML = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = char === " " ? "\u00A0" : char;
        splitText.appendChild(span);
      });

      anime.timeline({ loop: false }).add({
        targets: ".home__split .letter",
        translateY: [40, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 50 * (i + 1),
      });
    }
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__info">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">
            Kim Anh
          </h1>
        </div>

        <div className="home__blob">
          <img
            src="/img/home-perfil.png"
            alt="home perfil"
            className="home__perfil"
          />
        </div>

        <div className="home__about">
          <span className="home__split" id="home-split">
            Creative
          </span>
          <h2 className="home__profession">
            <span className="home__profession-1">Developer</span>
            <span className="home__profession-2">& Designer</span>
          </h2>
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="ri-dribbble-fill"></i>
          </a>
          <a
            href="https://about.gitlab.com/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="ri-gitlab-fill"></i>
          </a>
        </div>

        <a href="/pdf/KimAnh_CV.pdf" download className="home__cv">
          RESUME <i className="ri-file-download-line"></i>
        </a>
      </div>
    </section>
  );
}
