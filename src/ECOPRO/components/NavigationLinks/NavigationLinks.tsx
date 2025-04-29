import { Link,  BrowserRouter as Router, } from "react-router-dom";

import type { NavigationLinksProps } from "./NavigationLinks.type";
import "./NavigationLinks.css";

import { joinClassNames } from "../Utils";

function NavigationLinks({ className, links = [] }: NavigationLinksProps) {
  return (
    <nav className={joinClassNames(["navigation_links", className])}>
      <ul className="navigation_links__list">
        {links.map((link,index) => (
          <li key={index} className="navigation_links__item">
          <div
              
              className={"navigation_links__link"
              }
              
            >
              {link.caption}
            </div>
           
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
