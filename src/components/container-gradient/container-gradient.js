import _ from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../container";

const ContainerGradient = styled(Container)`
  ${props => {
    const {
      // eslint-disable-line
      gradientAngle,
      gradientColors
    } = props;
    return `
      background-color: ${gradientColors[0]};
      background-image: linear-gradient(${gradientAngle}deg, ${_.join(gradientColors, ", ")});
    `;
  }}
`;

ContainerGradient.propTypes = {
  gradientAngle: PropTypes.number.isRequired,
  gradientColors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ContainerGradient;
