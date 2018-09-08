import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = ({ icon }) => (
  <FontAwesomeIcon
    style={{
      width: "100%",
      height: "60%",
      marginTop: "50%",
      transform: "translateY(-50%)"
    }}
    icon={icon}
    color="#e0e0e0"
  />
);

export default ButtonIcon;
