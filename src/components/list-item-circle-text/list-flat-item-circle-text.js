import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Container from "../container";
import CircleTextContainer from "./components/circle-text-container";
import Circle from "../circle";
import CircleTextText from "./components/circle-text-text";

const ListFlatItemCircleText = ({
  // eslint-disable-line
  as,
  onClick,
  text,
  theme: { primaryVariantColor },
  ...others
}) => (
  <Container>
    <CircleTextContainer as={as} onClick={onClick}>
      <React.Fragment>
        <Circle
          {...others}
          diameter="large"
          style={{ marginBottom: 15 }}
          placeholderColor={primaryVariantColor}
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
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(ListFlatItemCircleText);
