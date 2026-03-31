"use client";
import React, { useEffect } from "react";

export default function ScrollRevealWrapper({ children }) {
  useEffect(() => {
    import("scrollreveal").then((module) => {
      const ScrollReveal = module.default;
      const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 300,
        reset: false,
      });

      sr.reveal(".home__data, .home__blob, .section__title");
      sr.reveal(".home__social, .about__perfil", { origin: "left" });
      sr.reveal(".home__cv, .about__data", { origin: "right" });
      sr.reveal(".projects__card, .work__data, .contact__card", {
        interval: 200,
      });
      sr.reveal(".services__item", { origin: "bottom", interval: 200 });
      sr.reveal(".testimonials__row", { origin: "bottom" });
    });
  }, []);

  return <>{children}</>;
}
