import React from "react";
import Gist from "../Gist/Gist.component";

const GistList = ({ gists }) => {
  if (!gists) {
    return <div>Here</div>;
  }

  const itemStyles = {
    background: "rgba(255, 179, 179, 0.3)",
    padding: "5px",
    margin: "2px",
    display: "inline-block",
  };

  const movieItems = gists.map((gist, i) => (
    <div key={i}>
      <ul style={itemStyles} key={i}>
        {gist.url}
      </ul>
    </div>
  ));
  console.log(movieItems);
  return <div>{movieItems}</div>;
};

export default GistList;
