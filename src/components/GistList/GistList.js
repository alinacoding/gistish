import React from "react";
import Gist from "../Gist/Gist.component";

const GistList = ({ gists }) => {
  if (!gists) {
    return <div>No gists available</div>;
  }

  const itemStyles = {
    background: "rgba(255, 179, 179, 0.3)",
    padding: "5px",
    margin: "2px",
    display: "inline-block",
  };

  let gistItems = [];
  if (gists) {
    gistItems = gists.map((gist, i) => (
      <div key={i}>
        <Gist style={itemStyles} url={gist.url} />
      </div>
    ));
  }
  if (gistItems.length) {
    return <div>{gistItems}</div>;
  } else {
    return <div></div>;
  }
};

export default GistList;
