
import styles from "./navbar.module.scss";

import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (

      <div className={styles.navbar}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/docs">Docs</NavLink>
      </div>

  );
}

export default Navbar;
