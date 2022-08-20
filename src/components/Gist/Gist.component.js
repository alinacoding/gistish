import React from "react";
import "./Gist.styles.css";

const Gist = ({ url, files }) => {
  return (
    <article className="url-article">
      {/* <div className="url-image"></div>
      <div className="url-content"> */}
      {/* <h2 className="url-name">{url}</h2> */}
      {/* </div> */}
      <div>{files}</div>
    </article>
  );
};

export default Gist;
