import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours.map((tour) => {
        return (
          <Tour
            key={tour.id}
            removeTour={removeTour}
            id={tour.id}
            name={tour.name}
            image={tour.image}
            info={tour.info}
            price={tour.price}
          />
        );
      })}
    </div>
  );
};

export default Tours;
