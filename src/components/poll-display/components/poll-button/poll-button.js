import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonOption from "./components/button-option"

const PollButton = ({ option }) => (
  <ButtonContainer onClick={() => pollVote({ contentId, post })}>
    <ButtonOption type="h3">
      {option}
    </ButtonOption>
  </ButtonContainer>
);

PollButton.propTypes = {
  option: PropTypes.string.isRequired,
};

export default PollButton;