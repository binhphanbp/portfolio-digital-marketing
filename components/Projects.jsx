"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">
        We Make Incredible <br />
        <span>Projects</span>
      </h2>

      <div className="projects__container container">
        {mounted && (
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={true}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1150: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="projects__swiper"
          >
            {/* Project 1 */}
            <SwiperSlide className="projects__card">
              <div className="projects__data">
                <div className="projects__header">
                  <span className="projects__number">01</span>
                  <h3 className="projects__title">Web</h3>
                </div>
                <h2 className="projects__subtitle">
                  Barbershop <br />
                  website
                </h2>
                <span className="projects__description">Technologies used</span>
                <p className="projects__skills">
                  HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.
                </p>
              </div>
              <img
                src="/img/projects-1.png"
                alt="projects image"
                className="projects__img"
              />
            </SwiperSlide>

            {/* Project 2 */}
            <SwiperSlide className="projects__card">
              <div className="projects__data">
                <div className="projects__header">
                  <span className="projects__number">02</span>
                  <h3 className="projects__title">Design</h3>
                </div>
                <h2 className="projects__subtitle">
                  Interface Design <br />
                  For Ice Cream Shop
                </h2>
                <span className="projects__description">Technologies used</span>
                <p className="projects__skills">
                  HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.
                </p>
              </div>
              <img
                src="/img/projects-2.png"
                alt="projects image"
                className="projects__img"
              />
            </SwiperSlide>

            {/* Project 3 */}
            <SwiperSlide className="projects__card">
              <div className="projects__data">
                <div className="projects__header">
                  <span className="projects__number">03</span>
                  <h3 className="projects__title">Web</h3>
                </div>
                <h2 className="projects__subtitle">
                  SEO For Coffee <br />
                  Websites
                </h2>
                <span className="projects__description">Technologies used</span>
                <p className="projects__skills">
                  HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.
                </p>
              </div>
              <img
                src="/img/projects-3.png"
                alt="projects image"
                className="projects__img"
              />
            </SwiperSlide>

            {/* Project 4 */}
            <SwiperSlide className="projects__card">
              <div className="projects__data">
                <div className="projects__header">
                  <span className="projects__number">04</span>
                  <h3 className="projects__title">Design</h3>
                </div>
                <h2 className="projects__subtitle">
                  Web Design <br />
                  For Restaurant
                </h2>
                <span className="projects__description">Technologies used</span>
                <p className="projects__skills">
                  HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.
                </p>
              </div>
              <img
                src="/img/projects-4.png"
                alt="projects image"
                className="projects__img"
              />
            </SwiperSlide>

            {/* Project 5 */}
            <SwiperSlide className="projects__card">
              <div className="projects__data">
                <div className="projects__header">
                  <span className="projects__number">05</span>
                  <h3 className="projects__title">Web</h3>
                </div>
                <h2 className="projects__subtitle">
                  Fast Food <br />
                  Website
                </h2>
                <span className="projects__description">Technologies used</span>
                <p className="projects__skills">
                  HTML, CSS, JavaScript, Gsap, Swiper Js and Figma.
                </p>
              </div>
              <img
                src="/img/projects-5.png"
                alt="projects image"
                className="projects__img"
              />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </section>
  );
}
