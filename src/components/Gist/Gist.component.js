import React from "react";

const Gist = ({ url, style }) => {
  return <ul style={style}>{url}</ul>;
};

export default Gist;
