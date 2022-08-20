import React, { Component } from "react";
import Gist from "../Gist/Gist.component";
import { faJava } from "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faQ } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/fontawesome-free-regular";
import "../Gist/Gist.styles.css";

class GistList extends Component {
  render() {
    let { gists } = this.props;
    if (!gists) {
      return <div>No gists available</div>;
    }
    fontawesome.library.add(faJava, faQ, faQuestionCircle);

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
                    console.log(file["language"]);
                    switch (file["language"].toLowerCase()) {
                      case "java":
                        return (
                          <div className="rowC" key={gist.url}>
                            <FontAwesomeIcon
                              key={gist.url}
                              icon={faJava}
                              className="fa-2x"
                            ></FontAwesomeIcon>
                          </div>
                        );
                      case "javascript":
                        return (
                          <div key={gist.url}>
                            <FontAwesomeIcon className="fab fa-js fa-2x" />
                          </div>
                        );
                      case "python":
                        return (
                          <div key={gist.url}>
                            <FontAwesomeIcon className="fab fa-python fa-2x" />
                          </div>
                        );
                      case "markdown":
                        return (
                          <div key={gist.url}>
                            <FontAwesomeIcon className="fas fa-code fa-2x" />
                          </div>
                        );
                      case "text":
                        return (
                          <div key={gist.url}>
                            <FontAwesomeIcon
                              icon="fa-solid fa-file"
                              className="fa-2x"
                            />
                          </div>
                        );
                      default:
                        return (
                          <div key={gist.url}>
                            <FontAwesomeIcon
                              icon={faQuestionCircle}
                              className="fa-2x"
                            />
                          </div>
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
