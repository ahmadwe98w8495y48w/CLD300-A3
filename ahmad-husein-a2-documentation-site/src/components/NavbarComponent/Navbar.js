// STYLES
import styles from "./navbar.module.scss";

const Navbar = ({ children }) => {
  return (
    <>
      <div className={styles.navbar}> {children} </div>;
    </>
  );
};

export default Navbar;
