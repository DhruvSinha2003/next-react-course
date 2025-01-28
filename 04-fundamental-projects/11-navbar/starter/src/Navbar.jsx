import React, { useState } from "react";
import { links } from "./data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setShowLinks(!showLinks);
        }}
      >
        ShowLink
      </button>
      {showLinks && (
        <div>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href="link.url">{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
