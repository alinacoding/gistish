// import { useNavigate } from "react-router-dom";
import React from "react";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Badge = (props) => {
  const { url, file, iconStyle } = props;
  //   const history = useNavigate();
  //const [queryUser, setQueryUser] = useState("");
  const [queryUser, setQueryUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("queryUser");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [queryUserChanged, setQueryUserChanged] = useState(false);
  const [submittedButton, setSubmittedButton] = useState(false);

  //const [prevUser, setPrevUser] = useState("");
  //   let navigate = useNavigate();
  //   const routeChange = (path) => {
  //     navigate(path);
  //   };

  //   useEffect(() => {
  //     localStorage.setItem("queryUser", JSON.stringify(prevUser));
  //     localStorage.setItem("submittedButton", JSON.stringify(true));
  //     localStorage.setItem("queryUserChanged", JSON.stringify(true));
  //   }, [queryUser, submittedButton, queryUserChanged]);

  return (
    <div key={url}>
      <FontAwesomeIcon
        icon={iconStyle}
        className="fa-2x"
        onClick={(event) => {
          event.preventDefault();
          //console.log("PrevUSer", ref);
          //setQueryUser(ref);
          setSubmittedButton(true);
          setQueryUserChanged(true);
          console.log("HERE1");
          window.location.href = file["raw_url"];
          console.log(localStorage);

          console.log("HERE2");
          //return null;
        }}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Badge;
