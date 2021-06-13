import React from "react";
const ExternalLink = (props) => {
  const { title, link } = props;
  return (
    <a href={link} target="_blank">
      {title}
      <i
        className="fa fa-external-link-square"
        style={{ paddingLeft: "4px" }}
        aria-hidden="true"
      ></i>
    </a>
  );
};
export default ExternalLink;
