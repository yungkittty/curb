import React from "react";
import PropTypes from "prop-types";
import Container from "../container";
import CircleTextContainer from "./components/circle-text-container";
import Circle from "../circle";
import CircleTextText from "./components/circle-text-text";

const ListFlatItemCircleText = ({ as, onClick, text, ...others }) => (
  <Container>
    <CircleTextContainer as={as} onClick={onClick}>
      <React.Fragment>
        {/** @TODO shouldnt be 15 if not validated! */}
        <Circle {...others} diameter="large" style={{ marginBottom: 15 }} />
        <CircleTextText>
          {/* eslint-disable-line */}
          {text}
        </CircleTextText>
      </React.Fragment>
    </CircleTextContainer>
  </Container>
);

ListFlatItemCircleText.defaultProps = {
  as: undefined,
  onClick: undefined
};

ListFlatItemCircleText.propTypes = {
  as: PropTypes.func,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  text: PropTypes.string.isRequired
};

export default ListFlatItemCircleText;
