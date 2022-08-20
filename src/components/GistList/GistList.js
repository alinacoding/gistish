import React, { Component } from "react";
import Gist from "../Gist/Gist.component";
import { faJava } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faQ } from "@fortawesome/free-solid-svg-icons";

class GistList extends Component {
  render() {
    let { gists } = this.props;
    if (!gists) {
      return <div>No gists available</div>;
    }
    fontawesome.library.add(faJava, faQ);

    let gistItems = [];
    if (gists) {
      gistItems = gists.map((gist, i) => (
        <div key={i}>
          <Gist
            url={gist.url}
            files={Object.values(gist.files).map((file, j) => (
              <div key={file["language"] + j}>
                {file["language"] !== null ? (
                  (() => {
                    switch (file["language"].toLowerCase()) {
                      case "java":
                        return (
                          <div key={gist.url}>
                            <FontAwesomeIcon
                              key={gist.url}
                              icon={faJava}
                              className="fa-10x"
                            ></FontAwesomeIcon>
                          </div>
                        );
                      default:
                        return (
                          <FontAwesomeIcon
                            key={gist.url}
                            icon={faQ}
                          ></FontAwesomeIcon>
                        );
                    }
                  })()
                ) : (
                  <div></div>
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
  }
}

export default GistList;
