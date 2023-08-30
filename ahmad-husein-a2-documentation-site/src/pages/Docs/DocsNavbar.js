import styles from "./docs.module.scss";

import Codeblock from "/src/components/Codeblock/Codeblock.js";

import Navbar from "../../components/NavbarComponent/Navbar";

const DocsNavbar = () => {
  const snippet = `
  <Navbar>
    <a href="#">Discography</a>
    <a href="#">Tour</a>
    <a href="#">Photo</a>
    <a href="#">Design</a>
    <a href="#">Merch</a>
    <a href="#">Contact</a>
  </Navbar>

  `;

  return (
    <>
      <h4>Navbar</h4>

      <p>This is a component for a Navbar</p>

      <hr />

      <div className={styles.example}>
        <Navbar>
          <a href="#">Discography</a>
          <a href="#">Tour</a>
          <a href="#">Photo</a>
          <a href="#">Design</a>
          <a href="#">Merch</a>
          <a href="#">Contact</a>
        </Navbar>
      </div>

      <p>A Snippet of Component code</p>

      <Codeblock snippet={snippet} />
    </>
  );
};

export default DocsNavbar;
