import styles from "./docs.module.scss";

import { NavLink, Outlet } from "react-router-dom";

const Docs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NavLink to="overview">Overview</NavLink>
        <NavLink to="navbar">Navbar</NavLink>
        <NavLink to="card">Card</NavLink>
        <NavLink to="typography">Typography</NavLink>
        <NavLink to="image">Image</NavLink>
        <NavLink to="input">Input</NavLink>

        <NavLink to="button">Button</NavLink>
      </div>

      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Docs;
