import styles from "./typography.module.scss";

const Typography = ({ variant, children }) => {
  const variantMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p"
  };

  var Tag = variantMapping[variant] ? variantMapping[variant] : "p";

  var variantclassname = `variant_${Tag}`;

  return <Tag className={styles[variantclassname]}> {children} </Tag>;
};

export default Typography;
