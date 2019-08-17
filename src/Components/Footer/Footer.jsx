import React from "react";
import { NavLink } from "react-router-dom";
import "../style/footer.scss";

const year = new Date().getFullYear();

const links = [
  {
    href: "https://bamboocrowd.com/",
    text: "Instagram"
  },
  {
    href: "https://bamboocrowd.com/",
    text: "Facebook"
  },
  {
    href: "https://bamboocrowd.com/",
    text: "VK"
  },
  {
    href: "https://bamboocrowd.com/",
    text: "Boka Direkt"
  }
];

const siteMap = [
  {
    path: "/",
    text: "Hem",
    exact: true
  },
  {
    path: "/behandlingar",
    text: "Behandlingar"
  },
  {
    path: "/behandlingar/botox",
    text: "Botox"
  },
  {
    path: "/behandlingar/fillers",
    text: "Fillers"
  }
];

const Footer = () => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none">
        >
        <path
          fill="#fea4a4"
          fillOpacity="1"
          d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,90.7C840,85,960,139,1080,149.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <footer>
        <div>
          <p>Sociala Medier</p>

          <ul>
            {links.map(link => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p>Sitemap</p>

          <ul className="footer__sitemap">
            {siteMap.map(path => (
              <li key={path.path}>
                <NavLink exact={path.exact} to={path.path}>
                  {path.text}
                </NavLink>
              </li>
            ))}
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
    </React.Fragment>
  );
};
export default Footer;
