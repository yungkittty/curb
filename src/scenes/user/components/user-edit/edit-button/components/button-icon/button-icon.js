import React from "react";
import { string } from "prop-types";
import Icon from "../../../../../../../components/icon";

const color = "#dedede";

const ButtonIcon = ({ icon, size }) => <Icon icon={icon} color={color} size={size} />;

ButtonIcon.defaultProps = {
  icon: undefined,
  size: "big"
};

ButtonIcon.propTypes = {
  icon: string,
  size: string
};

export default ButtonIcon;