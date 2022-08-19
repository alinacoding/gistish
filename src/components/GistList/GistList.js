import React from "react";
import Gist from "../Gist/Gist.component";

const GistList = ({ gists }) => {
  if (!gists) {
    return <div>No gists available</div>;
  }

  let gistItems = [];
  if (gists) {
    gistItems = gists.map((gist, i) => (
      <div key={i}>
        <Gist
          url={gist.url}
          files={Object.values(gist.files).map((file, j) => (
            <div key={file["language"] + j}>
              {file["language"] !== "null" ? (
                <ul key={gist.url}>{file["language"]}</ul>
              ) : (
                <ul key={gist.url}></ul>
              )}
            </div>
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
