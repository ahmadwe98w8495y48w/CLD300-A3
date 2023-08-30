import Typography from "../../components/Typography/Typography";
import styles from "./docs.module.scss";

import Codeblock from "/src/components/Codeblock/Codeblock.js";

const DocsTypography = () => {
  const snippet = `
  <Typography variant="h1">Heading 1 </Typography>
  <Typography variant="h2">Heading 2 </Typography>
  <Typography variant="h3">Heading 3</Typography>
  <Typography variant="h4">Heading 4</Typography>
  <Typography variant="h5">Heading 5 </Typography>
  <Typography variant="h6">Heading 6 </Typography>
  <Typography variant="p">Button text </Typography>
  
  `;

  return (
    <>
      <h4>Typography</h4>

      <p>
        This component is a typography component. All of the font sizes and
        weights can be applied like you would normally with H1-H6 and P tags.
      </p>

      <hr />

      <div className={styles.example}>
        <Typography variant="h1">Heading 1 </Typography>
        <Typography variant="h2">Heading 2 </Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5 </Typography>
        <Typography variant="h6">Heading 6 </Typography>
        <Typography variant="p">Button text </Typography>
      </div>

      <p>A Snippet of Component code</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsTypography;
