import React from "react";
import PropTypes from "prop-types";
import ButtonIconFloat from "../../../../../../components/button-icon-float";

const ListButtonIconFloat = ({ style, ...others }) => (
  <ButtonIconFloat
    // eslint-disable-line
    {...others}
    diameter="extra-small"
    size="extra-small"
    style={{ ...style, top: 30 }}
  />
);

ListButtonIconFloat.defaultProps = {
  style: undefined
};

ListButtonIconFloat.propTypes = {
  style: PropTypes.object // eslint-disable-line
};

export default ListButtonIconFloat;
