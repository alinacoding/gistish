import Gist from "../Gist/Gist.component";
import { faJava } from "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faQuestionCircle } from "@fortawesome/fontawesome-free-regular";
import { useEffect, useState } from "react";
import Badge from "../Badge/Badge.component";

const File = (props) => {
  const { file, index, url } = props;
  const [queryUserChanged, setQueryUserChanged] = useState(false);
  const [submittedButton, setSubmittedButton] = useState(false);
  const [queryUser, setQueryUser] = useState("");
  //const [prevUser, setPrevUser] = useState("");
  const [gists, setGists] = useState([]);
  return (
    <div key={file["language"] + index}>
      {file["language"] !== null ? (
        (() => {
          console.log(file);
          let language = file["language"].toLowerCase();
          switch (language) {
            case "java":
              return <Badge file={file} url={url} iconStyle={"fab fa-java"} />;
            case "markdown":
              return <Badge file={file} url={url} iconStyle={"fas fa-file"} />;
            case "python":
              return (
                <Badge file={file} url={url} iconStyle={"fab fa-python"} />
              );
            case "javascript":
              return <Badge file={file} url={url} iconStyle={"fab fa-js"} />;
            case "text":
              return <Badge file={file} url={url} iconStyle={"fas fa-file"} />;
            default:
              return <Badge file={file} url={url} iconStyle={"fas fa-file"} />;
          }
        })()
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default File;
