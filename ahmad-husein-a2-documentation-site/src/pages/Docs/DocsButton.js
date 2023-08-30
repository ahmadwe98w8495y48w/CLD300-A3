import styles from "./docs.module.scss";

import Codeblock from "/src/components/Codeblock/Codeblock.js";

import Button from "../../components/Button/Button";

const DocsButton = () => {
  const snippet = `
  <Button> Tickets </Button>

  `;

  return (
    <>
      <h4>Button</h4>

      <p>This is a component for a button</p>

      <hr />

      <div className={styles.example}>
        <Button> Tickets </Button>
      </div>

      <p>A Snippet of Component code</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsButton;
