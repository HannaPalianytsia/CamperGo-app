import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.navItem, isActive && styles.active);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={buildLinkClass}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
