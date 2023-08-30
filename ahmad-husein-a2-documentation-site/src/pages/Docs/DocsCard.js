import Card from "../../components/Card/Card";
import styles from "./docs.module.scss";

import Codeblock from "/src/components/Codeblock/Codeblock.js";

const DocsTemplate = () => {
  const snippet = `
<Card>
  <h1>Heading text</h1>
  <p>Body paragraph</p>
</Card> 
  `;

  return (
    <>
      <h4>Card</h4>

      <p>
        This component is a card component. It can be used like a div with tags
        placed before and after content to display them inside a card.
      </p>

      <hr />

      <div className={styles.example}>
        <Card>
          <h1>Heading text</h1>
          <p>Body paragraph</p>
        </Card>
      </div>

      <p>A Snippet of Component code</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsTemplate;
