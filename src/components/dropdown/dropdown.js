import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import DropdownContainer from "./components/dropdown-container";
import DropdownItem from "./components/dropdown-item";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener("click", this.handleMouseClick, true);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleMouseClick, true);
  }

  handleMouseClick(e) {
    e.preventDefault();
    const { onClose } = this.props;
    const event = e || window.event;
    const button = event.which || event.button;
    if (("buttons" in event && event.buttons !== 1) || button !== 1) setTimeout(() => onClose(), 0);
  }

  render() {
    const { style, optionsList } = this.props;
    return (
      <DropdownContainer style={style}>
        {_.map(optionsList, (itemProps, index) => (
          <DropdownItem key={index} {...itemProps} />
        ))}
      </DropdownContainer>
    );
  }
}

Dropdown.defaultProps = {
  style: undefined
};

Dropdown.propTypes = {
  style: PropTypes.object, // eslint-disable-line
  onClose: PropTypes.func.isRequired,
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, icon: PropTypes.string, onClick: PropTypes.func })
  ).isRequired
};

export default Dropdown;
