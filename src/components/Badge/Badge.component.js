import React, { useState } from "react";
import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Badge = (props) => {
  const [submittedButton, setSubmittedButton] = useState(false);
  const [queryUserChanged, setQueryUserChanged] = useState(false);
  const { url, file, iconStyle } = props;
  return (
    <div key={url}>
      <FontAwesomeIcon
        icon={iconStyle}
        className="fa-2x"
        onClick={(event) => {
          event.preventDefault();
          window.location.href = file["raw_url"];
        }}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Badge;
