import React from "react";
import { services } from "../data";
import Title from "./Title";

const Services = () => {
  return (
    <div>
      <section class="section services" id="services">
        <Title title="our" subTitle="services" />
        <div class="section-center services-center">
          {services.map((service) => {
            return (
              <article class="service">
                <span class="service-icon">
                  <i class={service.icon}></i>
                </span>
                <div class="service-info">
                  <h4 class="service-title">{service.title}</h4>
                  <p class="service-text">{service.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
