import  { useState } from "react";
import { Link } from "react-router-dom";
import { tabsLinks } from "./tabsLinks"; 
import styles from "./Sidebar.module.scss"; 
import FontButtons from "components/FontButton";
const Sidebar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuClick = (label) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const renderLinks = (links) => {
    return links.map((link, idx) => (
      <li key={idx}>
        {Array.isArray(link.route) ? (
          <>
            <div
              className={styles.submenuLabel}
              onClick={() => handleSubmenuClick(link.label)} 
            >
              {link.label}
            </div>
            <ul
              className={`${styles.submenu} ${activeSubmenu === link.label ? styles.show : ""}`}
            >
              {link.route.map((subLink, subIdx) => (
                <li key={subIdx}>
                  <Link to={subLink.route}>{subLink.label}</Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Link to={link.route}>{link.label}</Link>
        )}
      </li>
    ));
  };

  return (
    <div className={styles.sidebar}>
      <FontButtons/>
      <nav>
        <ul>{renderLinks(tabsLinks)}</ul>
      </nav>
    </div>
  );
};

export default Sidebar;
