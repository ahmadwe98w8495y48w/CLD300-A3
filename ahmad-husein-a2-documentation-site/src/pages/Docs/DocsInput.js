import Input from "../../components/Input/Input";
import styles from "./docs.module.scss";

import Codeblock from "/src/components/Codeblock/Codeblock.js";

const DocsInput = () => {
  const snippet = `

    <Input stype="text" placeholder="Email" />

  `;

  return (
    <>
      <h4>Input</h4>

      <p>
        This component lets you create an input box. In this example, for a
        newsletter
      </p>

      <hr />

      <div className={styles.example}>
        <Input type="text" placeholder="Your email" />
      </div>

      <p>A Snippet of Component code</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsInput;
