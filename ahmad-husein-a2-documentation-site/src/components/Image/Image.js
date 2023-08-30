import styles from "./image.module.scss";

const Image = ({ src, alt, ...props }) => {
  return <img src={src} className={`${styles.default}`} {...props} />;
};

export default Image;
