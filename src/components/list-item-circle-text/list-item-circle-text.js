import React from "react";
import PropTypes from "prop-types";
import Container from "../container";
import CircleTextContainer from "./components/circle-text-container";
import Circle from "../circle";
import CircleTextPlaceholder from "./components/circle-text-placeholder";
import CircleTextText from "./components/circle-text-text";
import { platformBools } from "../../configurations/platform";

const ListItemCircleText = ({
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
          diameter="large"
          size="large"
          style={{ marginBottom: platformBools.isReact ? 20 : 10 }}
        />
        {!text ? (
          <CircleTextPlaceholder />
        ) : (
          <CircleTextText>
            {/* eslint-disable-line */}
            {text}
          </CircleTextText>
        )}
      </React.Fragment>
    </CircleTextContainer>
  </Container>
);

ListItemCircleText.defaultProps = {
  as: undefined,
  onClick: undefined,
  text: undefined
};

ListItemCircleText.propTypes = {
  as: PropTypes.func,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  text: PropTypes.string
};

export default ListItemCircleText;
