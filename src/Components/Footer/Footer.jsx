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
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ transform: "translateY(1px)" }}>
        <path
          fill="#fea4a4"
          fillOpacity="1"
          d="M0,32L60,37.3C120,43,240,53,360,85.3C480,117,600,171,720,197.3C840,224,960,224,1080,218.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg> */}
      <footer>
        <table>
          <tbody>
            <tr>
              <td>
                <p className="footer__title">Sociala Medier</p>
              </td>
              <td>
                <ul>
                  {links.map(link => (
                    <li key={link.text}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>

            <tr>
              <td>
                <p className="footer__title">Sitemap</p>
              </td>
              <td>
                <ul className="footer__sitemap">
                  {siteMap.map(path => (
                    <li key={path.path}>
                      <NavLink exact={path.exact} to={path.path}>
                        {path.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <p className="footer__title">Kontakt</p>
              </td>
              <td>
                <ul>
                  <li>
                    <a
                      href="mailto:sven.svensson@gmail.com?Subject=Företagets%20namn"
                      target="_top">
                      sven.svensson@gmail.se
                    </a>
                  </li>
                  <li>
                    <a href="tel:073-123-45-67">073 123 45 67</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr className="copyright">
              <td>{year} © WebCrafts</td>
            </tr>
          </tfoot>
        </table>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
