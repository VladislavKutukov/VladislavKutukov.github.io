import { Link } from "react-router-dom";

import type { NavigationLinksProps } from "./NavigationLinks.type";
import "./NavigationLinks.css";

import { joinClassNames } from "../Utils";

function NavigationLinks({ className, links = [] }: NavigationLinksProps) {
  return (
    <nav className={joinClassNames(["navigation_links", className])}>
      <ul className="navigation_links__list">
        {links.map((link,index) => (
          <li key={index} className="navigation_links__item">
            <Link
              to={link.to}
              // className={({ isActive }) =>
              //   joinClassNames([
              //     "navigation_links__link",
              //     { "navigation_links--active": isActive },
              //   ])
              // }
              // end
            >
              {link.caption}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavigationLinks.defaultProps = {
  className: undefined,
};

export default NavigationLinks;
