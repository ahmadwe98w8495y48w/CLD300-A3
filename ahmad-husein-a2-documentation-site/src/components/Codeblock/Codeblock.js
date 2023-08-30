import "prismjs/themes/prism.css";

import Prism from "prismjs";
import { useEffect } from "react";

// alternative themes 
//import "prismjs/themes/prism-dark.css";
//import "prismjs/themes/prism-twilight.css";
//import "prismjs/themes/prism-coy.css";
//import "prismjs/themes/prism-okaidia.css";
//import "prismjs/themes/prism-solarizedlight.css";
//import "prismjs/themes/prism-tomorrow.css";

const Codeblock = ({snippet}) => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <pre><code className="language-html">{snippet}</code></pre>
    </>
  );
}

export default Codeblock;
