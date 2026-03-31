import React from "react";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__perfil">
          <img
            src="/img/about-perfil.png"
            alt="about perfil"
            className="about__img"
          />
        </div>

        <div className="about__data">
          <h2 className="section__title about__title">
            <span>Creativity</span>
            <br />
            Is My Passion
          </h2>

          <p className="about__description">
            I'm a web <b>developer and designer</b> passionate about
            experimenting with new <b>skills and creativity.</b> Driven by
            learning and curiosity, I'm always looking to explore and learn new
            development and design skills.
          </p>

          <a href="/pdf/Anid-Cv.pdf" download className="button about__button">
            Resume <i className="ri-file-download-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
