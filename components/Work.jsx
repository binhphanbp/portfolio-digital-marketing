"use client";
import React, { useState } from "react";

export default function Work() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="work section">
      <h2 className="section__title">
        <span>Our Work</span>
        <br />
        Experience
      </h2>

      <div className="work__container container grid">
        <div className="work__tabs">
          <button
            className={`work__button ${activeTab === "experience" ? "work__active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience <i className="ri-briefcase-line"></i>
          </button>
          <button
            className={`work__button ${activeTab === "education" ? "work__active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education <i className="ri-graduation-cap-line"></i>
          </button>
        </div>

        <div className="work__sections">
          {/* Experience */}
          <div
            className={`work__content ${activeTab === "experience" ? "work__show" : ""}`}
          >
            <div className="work__data">
              <div className="work__info">
                <h3 className="work__title">
                  Web <br />
                  Developer
                </h3>
                <span className="work__subtitle">Google Inc</span>
              </div>
              <span className="work__year">2020</span>
              <p className="work__description">
                Web developer handling technologies such as Angular, databases,
                CMS, assisting with web optimization.
              </p>
            </div>

            <div className="work__data">
              <div className="work__info">
                <h3 className="work__title">
                  Web <br />
                  Designer
                </h3>
                <span className="work__subtitle">Google Inc</span>
              </div>
              <span className="work__year">2022</span>
              <p className="work__description">
                Web developer handling technologies such as Angular, databases,
                CMS, assisting with web optimization.
              </p>
            </div>

            <div className="work__data">
              <div className="work__info">
                <h3 className="work__title">
                  SEO & Web <br />
                  Optimization
                </h3>
                <span className="work__subtitle">Google Inc</span>
              </div>
              <span className="work__year">Now</span>
              <p className="work__description">
                Web developer handling technologies such as Angular, databases,
                CMS, assisting with web optimization.
              </p>
            </div>
          </div>

          {/* Education */}
          <div
            className={`work__content ${activeTab === "education" ? "work__show" : ""}`}
          >
            <div className="work__data">
              <div className="work__info">
                <h3 className="work__title">
                  Systems <br />
                  Engineering
                </h3>
                <span className="work__subtitle">University</span>
              </div>
              <span className="work__year">2010</span>
              <p className="work__description">
                College student, learning the basics of programming, web
                development, and other topics, graduating with honors.
              </p>
            </div>

            <div className="work__data">
              <div className="work__info">
                <h3 className="work__title">
                  Web <br />
                  Programming
                </h3>
                <span className="work__subtitle">University</span>
              </div>
              <span className="work__year">2015</span>
              <p className="work__description">
                College student, learning the basics of programming, web
                development, and other topics, graduating with honors.
              </p>
            </div>

            <div className="work__data">
              <div className="work__info">
                <h3 className="work__title">
                  Usability <br />
                  (UX/UI)
                </h3>
                <span className="work__subtitle">University</span>
              </div>
              <span className="work__year">2018</span>
              <p className="work__description">
                College student, learning the basics of programming, web
                development, and other topics, graduating with honors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
