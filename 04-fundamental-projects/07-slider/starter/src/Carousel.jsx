import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { list, longList, shortList } from "./data";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);

  const prevSlide = () => {};
  const nextSlide = () => {};

  return (
    <section className="slider-container">
      {people.map((person) => {
        return (
          <article className="slide" key={person.id}>
            <img className="person-img" src={person.image} alt={person.name} />
            <h5 className="name">{person.name}</h5>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" type="button" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" type="button" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
