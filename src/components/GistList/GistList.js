import React, { Component, useEffect } from "react";
import Gist from "../Gist/Gist.component";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import File from "../File/File.component";

const GistList = (props) => {
  let { gists } = props;
  if (!gists) {
    return <div>No gists available</div>;
  }

  let gistItems = [];
  if (gists.length) {
    console.log(gists);
    gistItems = gists.map((gist, i) => (
      <div key={i}>
        <Gist
          url={gist.url}
          files={Object.values(gist.files).map((file, j) => (
            <File file={file} key={j} index={j} url={gist.url} />
          ))}
        />
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
