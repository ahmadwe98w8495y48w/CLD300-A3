// STYLES
import styles from "./button.module.scss";

const Button = ({ children }) => {
  return (
    <>
      <button className={styles.button}>{children}</button>;
    </>
  );
};

export default Button;
