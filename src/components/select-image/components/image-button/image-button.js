import React from "react";
import { string } from "prop-types";
import ButtonContainer from "./components/button-container";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../components/icon";

const color = "#dedede";

const EditButton = ({ icon, size, avatar }) => (
  <ButtonContainer background={avatar}>
    <IconContainer>
      <Icon icon={icon} size={size} color={color} />
    </IconContainer>
  </ButtonContainer>
);

EditButton.propTypes = {
  icon: string.isRequired,
  size: string.isRequired,
  avatar: string.isRequired,
};

export default EditButton;