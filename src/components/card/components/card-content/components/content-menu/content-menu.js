import React from "react";
import PropTypes from "prop-types";
import MenuContainer from "./components/menu-container";
import Icon from "../../../../../icon";
import Dropdown from "../../../../../dropdown";
import Circle from "../../../../../circle";

class ContentMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const {
      dropdownMenu: { icon, optionsList, onClick },
      selectedMediaType,
      ...others
    } = this.props;
    return (
      <Circle
        as={MenuContainer}
        diameter="extra-extra-small"
        onClick={onClick ? () => onClick(selectedMediaType) : () => this.setState({ isShowed: true })}
        style={{ overflow: "initial" }}
      >
        <Icon color="#ffffff" size="extra-extra-small" icon={icon} />
        {isShowed && (
          <Dropdown
            optionsList={optionsList}
            onClose={() => this.setState({ isShowed: false })}
            style={{ top: 0, right: 0 }}
            {...others}
          />
        )}
      </Circle>
    );
  }
}

ContentMenu.propTypes = {
  dropdownMenu: PropTypes.shape({
    icon: PropTypes.string,
    optionsList: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, icon: PropTypes.string, onClick: PropTypes.func })
    ),
    onClick: PropTypes.func
  }).isRequired,
  selectedMediaType: PropTypes.string.isRequired
};

export default ContentMenu;
