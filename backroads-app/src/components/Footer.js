import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <div>
      <footer class="section footer">
        <ul class="footer-links">
          {pageLinks.map((link) => {
            return (
              <li>
                <a href={link.href} class="footer-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul class="footer-icons">
          {socialLinks.map((link) => {
            return (
              <li>
                <a
                  href={link.href}
                  target="_blank"
                  class="footer-icon"
                  rel="noreferrer"
                >
                  <i class={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p class="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
