// STYLES
import styles from "./docs.module.scss";

// COMPONENTS
import Codeblock from "/src/components/Codeblock/Codeblock.js";
import Image from "../../components/Image/Image";

// IMAGES
import albumimg from "/src/images/ending-with-1000.jpg";

const DocsImage = () => {
  const snippet = `
  <Image src={albumimg} alt="album cover" />

  
`;

  return (
    <>
      <h4>Docs Image</h4>

      <p>This simple component allows you to display an image.</p>

      <hr />

      <div className={styles.example}>
        <Image src={albumimg} alt="album cover" />
      </div>

      <p>A Snippet of Component code</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsImage;
