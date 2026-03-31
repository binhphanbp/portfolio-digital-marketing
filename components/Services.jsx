"use client";
import React, { useState } from "react";

export default function Services() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) setOpenItem(null);
    else setOpenItem(index);
  };

  return (
    <section className="services section">
      <h2 className="section__title">
        What We <span>Offer</span>
      </h2>

      <div className="services__container container grid">
        {/* Service 1 */}
        <div
          className={`services__item ${openItem === 0 ? "services__open" : ""}`}
        >
          <h3 className="services__title">Developer</h3>
          <p className="services__description">
            Website creation with HTML, CSS, JavaScript. Professional websites
            with TypeScript, React, Node JS, and lots of creativity.
          </p>

          <div className="services__more">
            <h4 className="services__subtitle">Skills & Tools</h4>
            <div className="services__tags">
              <span className="services__tag">HTML</span>
              <span className="services__tag">CSS</span>
              <span className="services__tag">JavaScript</span>
              <span className="services__tag">React</span>
              <span className="services__tag">TypeScript</span>
              <span className="services__tag">Node Js</span>
              <span className="services__tag">Next Js</span>
              <span className="services__tag">PHP</span>
              <span className="services__tag">GitHub</span>
            </div>
          </div>

          <button
            className="services__toggle"
            onClick={() => toggleItem(0)}
          >
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>

        {/* Service 2 */}
        <div
          className={`services__item ${openItem === 1 ? "services__open" : ""}`}
        >
          <h3 className="services__title">Design</h3>
          <p className="services__description">
            Web designer with Figma and Sketch, creating motion designs with
            After Effects, creativity and design at its best.
          </p>

          <div className="services__more">
            <h4 className="services__subtitle">Skills & Tools</h4>
            <div className="services__tags">
              <span className="services__tag">Figma</span>
              <span className="services__tag">Adobe XD</span>
              <span className="services__tag">Photoshop</span>
              <span className="services__tag">Ilustrator</span>
              <span className="services__tag">Sketch</span>
              <span className="services__tag">3D Modeling</span>
              <span className="services__tag">After Effects</span>
            </div>
          </div>

          <button
            className="services__toggle"
            onClick={() => toggleItem(1)}
          >
            <i className="ri-arrow-down-s-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
