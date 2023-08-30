// STYLES
import styles from "./input.module.scss";

const Input = ({ type = "text", placeholder }) => {
  return (
    <>
      <div className={styles.textfield}>
        <input placeholder={placeholder} type={type} />
      </div>
    </>
  );
};

export default Input;
