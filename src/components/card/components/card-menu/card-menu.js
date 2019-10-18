import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import MenuContainer from "./components/menu-container";
import MenuItem from "./components/menu-item";
import MenuClose from "./components/menu-close";

class CardMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { optionsList, onClose } = this.props;
    return (
      <React.Fragment>
        <MenuContainer>
          {_.map(optionsList, ({ onClick, ...others }, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                onClick();
                onClose();
              }}
              {...others}
            />
          ))}
        </MenuContainer>
        <MenuClose onClose={onClose} />
      </React.Fragment>
    );
  }
}

CardMenu.propTypes = {
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, icon: PropTypes.string, onClick: PropTypes.func })
  ).isRequired,
  onClose: PropTypes.func.isRequired
};

export default CardMenu;
