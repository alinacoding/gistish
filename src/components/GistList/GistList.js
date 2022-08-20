import React, { Component, useEffect } from "react";
import Gist from "../Gist/Gist.component";
import { faJava } from "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faQ } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/fontawesome-free-regular";
import File from "../File/File.component";

const GistList = (props) => {
  //   useEffect(() => {}, []);

  let { gists } = props;
  if (!gists) {
    return <div>No gists available</div>;
  }
  fontawesome.library.add(faJava, faQ, faQuestionCircle);

  let gistItems = [];
  if (gists) {
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
