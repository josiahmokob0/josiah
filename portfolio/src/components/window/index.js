import React from "react";
import Highlight from "react-highlight";
import "../../../node_modules/highlight.js/styles/atom-one-dark.css";

import "./index.css";

const Window = () => {
  return (
    <div className="window">
      <div className="window__bar">Josiah's-workspace</div>
      <div className="window__content-frame flex items-center">
        <Highlight language="javascript">
  {`
    function full_name() {
      return ['Josiah', 'Mokobo']
    }

    function skills() {
    return [ 'javascript', 'reactjs']
    }
  `}
        </Highlight>
      </div>
    </div>
  );
};

export default Window;
