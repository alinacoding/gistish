import Gist from "../Gist/Gist.component";
import { faJava } from "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faQuestionCircle } from "@fortawesome/fontawesome-free-regular";
import { useEffect, useState, useSessionStorage } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavigateExternal from "../NavigateExternal/NavigateExternal.component";

const File = (props) => {
  const { file, index, url } = props;
  const [queryUserChanged, setQueryUserChanged] = useState(false);
  const [submittedButton, setSubmittedButton] = useState(false);
  const [queryUser, setQueryUser] = useState("");
  const [prevUser, setPrevUser] = useState("");
  const [gists, setGists] = useState([]);
  const history = useNavigate();
  return (
    <div key={file["language"] + index}>
      {file["language"] !== null ? (
        (() => {
          console.log(file);
          switch (file["language"].toLowerCase()) {
            case "java":
              return (
                <div key={url}>
                  <a href={file["raw_url"]}>
                    <FontAwesomeIcon
                      key={url}
                      icon={faJava}
                      className="fa-2x"
                    ></FontAwesomeIcon>
                  </a>
                </div>
              );
            case "markdown":
              return (
                <div key={url}>
                  <a
                    href={file["raw_url"]}
                    onClick={() => {
                      history.push("/", {
                        queryUserChanged: true,
                        submittedButton: true,
                        queryUser: prevUser,
                      });
                      // setQueryUserChanged(true);
                      // setSubmittedButton(true);
                      // setQueryUser(prevUser);
                    }}
                  >
                    <FontAwesomeIcon icon="fas fa-code" className="fa-2x" />
                  </a>
                </div>
              );

            case "python":
              return (
                <div key={url}>
                  <a href={file["raw_url"]}>
                    <FontAwesomeIcon className="fab fa-python fa-2x" />
                  </a>
                </div>
              );
            // case "markdown":
            //   return (
            //     <div key={url}>
            //       <a
            //         href={file["raw_url"]}
            //         onClick={() => {
            //           history.back();
            //         }}
            //       >
            //         <FontAwesomeIcon icon="fas fa-code" className="fa-2x" />
            //       </a>
            //     </div>
            //   );
            case "text":
              return (
                <div key={url}>
                  <a href={file["raw_url"]}>
                    <FontAwesomeIcon
                      icon="fa-solid fa-file"
                      className="fa-2x"
                    />
                  </a>
                </div>
              );
            default:
              return (
                <div key={url}>
                  <a href={file["raw_url"]}>
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="fa-2x"
                    />
                  </a>
                </div>
              );
          }
        })()
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default File;
