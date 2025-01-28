import React, { useState } from "react";
import { links } from "./data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
      {showLinks &&
        links.map((link) => {
          return (
            <div id={link.id}>
              <h1>{link.text}</h1>
              <h1>{link.url}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Navbar;
