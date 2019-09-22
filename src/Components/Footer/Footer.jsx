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
              <td>{year} © Ermilin</td>
            </tr>
          </tfoot>
        </table>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
