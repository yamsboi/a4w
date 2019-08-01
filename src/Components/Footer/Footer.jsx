import React from "react";
import { NavLink } from "react-router-dom";
import "../style/footer.scss";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Sociala Medier</p>

        <ul>
          <li>
            <a href="https://bamboocrowd.com/">Instagram</a>
          </li>
          <li>
            <a href="https://bamboocrowd.com/">Facebook</a>
          </li>
          <li>
            <a href="https://bamboocrowd.com/">VK</a>
          </li>
          <li>
            <a href="https://bamboocrowd.com/">Boka Direkt</a>
          </li>
        </ul>
      </div>

      <div>
        <p>Sitemap</p>

        <ul className="footer__sitemap">
          <li>
            <NavLink exact to="/">
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/behandlingar">Behandlingar</NavLink>
          </li>
          <li>
            <NavLink to="/behandlingar/botox">Botox</NavLink>
          </li>
          <li>
            <NavLink to="/behandlingar/fillers">Fillers</NavLink>
          </li>
        </ul>
      </div>

      <div>
        <p>Kontakt</p>
        <ul>
          <li>sven.svensson@gmail.se</li>
          <li>073 123 45 67</li>
        </ul>
      </div>

      <div className="copyright">
        <p>{year} © WebCrafts</p>
      </div>
    </footer>
  );
};
export default Footer;
