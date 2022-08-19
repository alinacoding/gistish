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

  const gistItems = gists.map((gist, i) => (
    <div key={i}>
      <Gist style={itemStyles} url={gist.url} />
    </div>
  ));
  return <div>{gistItems}</div>;
};

export default GistList;
