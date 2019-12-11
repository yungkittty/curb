import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import DropdownCloser from "./components/dropdown-closer";
import DropdownContainer from "./components/dropdown-container";
import DropdownItem from "./components/dropdown-item";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { style, className, optionsList, onClose } = this.props;
    return (
      <DropdownContainer style={style} className={className}>
        {_.map(optionsList, ({ onClick, ...others }, index) => (
          <DropdownItem
            key={index}
            onClick={() => {
              onClick();
              onClose();
            }}
            {...others}
          />
        ))}
      </DropdownContainer>
    );
  }
}

Dropdown.defaultProps = {
  style: undefined,
  className: undefined
};

Dropdown.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), // eslint-disable-line
  className: PropTypes.string,
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, icon: PropTypes.string, onClick: PropTypes.func })
  ).isRequired,
  onClose: PropTypes.func.isRequired
};

export default DropdownCloser(Dropdown);
