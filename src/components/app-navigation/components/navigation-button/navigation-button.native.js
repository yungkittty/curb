import _ from "lodash";
import React from "react";
// import PropTypes from "prop-types";
import { withRouter } from "react-router";
import styled from "styled-components";
import Button from "../../../button";
import withAppNavigation from "../../../../hocs/with-app-navigation";

const NavigationButton = styled(
  _.flow([
    // eslint-disable-line
    withAppNavigation,
    withRouter
  ])(({ hideAppNavigation, onClick, history, ...others }) => (
    <Button
      {...others}
      onClick={() => {
        hideAppNavigation();
        // console.log({ history });
        // eslint-disable-next-line
        onClick && typeof onClick === "string" ? history.push(onClick) : onClick();
      }}
    />
  ))
)`
  width: 50px;
  min-height: 50px;
  margin-bottom: 10px;
  border-radius: 25px;
  overflow: hidden;
  background-color: ${props => props.theme.secondaryVariantColor};
`;
/* 
NavigationButton.defaultProps = { onClick: undefined };

NavigationButton.propTypes = {
  hideAppNavigation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line
  onClick: PropTypes.oneOf([PropTypes.string, PropTypes.func])
}; */

export default NavigationButton;
