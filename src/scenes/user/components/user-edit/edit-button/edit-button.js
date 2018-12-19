import React from "react";
import { string } from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";

const EditButton = ({ icon, size, avatar }) => (
  <ButtonContainer background={avatar}>
    <ButtonIcon icon={icon} size={size} />
  </ButtonContainer>
);

EditButton.defaultProps = {
  icon: undefined,
  size: 'medium'
};

EditButton.propTypes = {
  icon: string,
  size: string,
  avatar: string.isRequired,
};

export default EditButton;