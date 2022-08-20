import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Badge = (props) => {
  const { url, file, iconStyle } = props;
  const history = useNavigate();
  const [queryUser, setQueryUser] = useState("");
  const [queryUserChanged, setQueryUserChanged] = useState(false);
  const [submittedButton, setSubmittedButton] = useState(false);
  const [prevUser, setPrevUser] = useState("");
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
          setQueryUserChanged(true);
          setSubmittedButton(true);
          setQueryUser(prevUser);
        }}
      >
        <FontAwesomeIcon icon={iconStyle} className="fa-2x" />
      </a>
    </div>
  );
};

export default Badge;
