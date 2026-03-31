import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      img: "/img/testimonial-1.png",
      name: "Abex Wrooks",
      rating: "5.0",
      description:
        "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
    },
    {
      img: "/img/testimonial-2.png",
      name: "Willer Morth",
      rating: "5.0",
      description:
        "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
    },
    {
      img: "/img/testimonial-3.png",
      name: "Llemi Llorens",
      rating: "5.0",
      description:
        "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
    },
    {
      img: "/img/testimonial-4.png",
      name: "Jems Guiller",
      rating: "5.0",
      description:
        "The company offers many easy-to-use services, with hard work and round-the-clock support on all projects.",
    },
  ];

  const renderCards = (list) => {
    return list.map((item, index) => (
      <article className="testimonials__card" key={index}>
        <img src={item.img} alt="testimonial" className="testimonials__img" />
        <h3 className="testimonials__name">{item.name}</h3>
        <div className="testimonials__stars">
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <span className="testimonials__number">{item.rating}</span>
        </div>
        <p className="testimonials__description">{item.description}</p>
      </article>
    ));
  };

  return (
    <section className="testimonials section">
      <h2 className="section__title">
        <span>What They Say</span>
        <br />
        About Me
      </h2>

      <div className="testimonials__container">
        {/* Row 1 - scrolls left */}
        <div className="testimonials__row" id="testimonials-row-1">
          {renderCards(testimonials)}
          {renderCards(testimonials)}
        </div>

        {/* Row 2 - scrolls right */}
        <div
          className="testimonials__row testimonials__row--reverse"
          id="testimonials-row-2"
        >
          {renderCards([...testimonials].reverse())}
          {renderCards([...testimonials].reverse())}
        </div>
      </div>
    </section>
  );
}
