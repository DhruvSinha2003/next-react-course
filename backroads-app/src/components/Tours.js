import React from "react";
import { tours } from "../data";
import Title from "./Title";
const Tours = () => {
  return (
    <div>
      <section class="section" id="tours">
        <Title title="featured" subTitle="tours" />
        <div class="section-center featured-center">
          {tours.map((tour) => {
            return (
              <article class="tour-card">
                <div class="tour-img-container">
                  <img src={tour.img} class="tour-img" alt="" />
                  <p class="tour-date">{tour.date}</p>
                </div>
                <div class="tour-info">
                  <div class="tour-title">
                    <h4>{tour.title}</h4>
                  </div>
                  <p>{tour.text}</p>
                  <div class="tour-footer">
                    <p>
                      <span>
                        <i class="fas fa-map"></i>
                      </span>{" "}
                      {tour.counry}
                    </p>
                    <p>{tour.duration}</p>
                    <p>{tour.price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
