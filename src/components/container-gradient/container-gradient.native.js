import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import Container from "../container";

const ContainerGradient = ({
  // eslint-disable-line
  style,
  gradientAngle,
  gradientColors,
  children,
  ...others
}) => {
  const {
    // eslint-disable-line
    display,
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
    minWidth,
    minHeight,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    ...styleOthers
  } = _.isArray(style) ? _.reduce(style, _.extend, {}) : style;

  const styleInnerOthers = {
    display,
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
    minWidth,
    minHeight,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  };

  const isContainer = !others.as;

  return (
    <Container
      // eslint-disable-line
      {...others}
      style={{
        ...styleOthers,
        display,
        alignItems,
        justifyContent,
        width,
        height,
        minWidth,
        minHeight,
        backgroundColor: gradientColors[0],
        ...(!isContainer ? styleInnerOthers : {})
      }}
    >
      {isContainer ? (
        <LinearGradient
          // eslint-disable-line
          useAngle
          angle={gradientAngle}
          angleCenter={{ x: 0.5, y: 0.5 }}
          colors={gradientColors}
          style={styleInnerOthers}
        >
          {children}
        </LinearGradient>
      ) : (
        children
      )}
    </Container>
  );
};

ContainerGradient.defaultProps = {
  style: undefined
};

ContainerGradient.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  gradientAngle: PropTypes.number.isRequired,
  gradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired
};

export default ContainerGradient;
