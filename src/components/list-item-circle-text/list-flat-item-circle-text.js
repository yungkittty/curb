import React from "react";
import PropTypes from "prop-types";
import Container from "../container";
import CircleTextContainer from "./components/circle-text-container";
import Circle from "../circle";
import CircleTextText from "./components/circle-text-text";
import { platformBools } from "../../configurations/platform";

const ListFlatItemCircleText = ({
  // eslint-disable-line
  as,
  onClick,
  text,
  ...others
}) => (
  <Container>
    <CircleTextContainer as={as} onClick={onClick}>
      <React.Fragment>
        <Circle
          {...others}
          diameter={platformBools.isReact ? "large" : "medium"}
          style={{ marginBottom: platformBools.isReact ? 20 : 10 }}
        />
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
