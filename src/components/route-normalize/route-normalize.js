import React from "react";
import PropTypes from "prop-types";
import Route from "../route";

const RouteNormalize = ({
  // eslint-disable-line
  component: Component,
  ...others
}) => (
  <Route
    {...others}
    render={props => {
      // eslint-disable-next-line
      const { id: componentKey } = props.match.params || {};
      if (!componentKey)
        // eslint-disable-next-line
        throw "RouteNormalize only accept routes of normalized components.";
      return <Component {...props} key={componentKey} />;
    }}
  />
);

RouteNormalize.propTypes = { component: PropTypes.func.isRequired };

export default RouteNormalize;
