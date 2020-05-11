import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/button-container";
import ButtonOption from "./components/button-option"

const PollButton = ({ pollVote, option, contentId}) => (
  <ButtonContainer onClick={() => pollVote({ contentId, option })}>
    <ButtonOption type="h3">
      {option}
    </ButtonOption>
  </ButtonContainer>
);

PollButton.propTypes = {
  contentId: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
};

export default PollButton;