import React from "react";
import PropTypes from "prop-types";

const DropdownCloser = WrappedComponent => {
  class _DropdownCloser extends React.Component {
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
      return <WrappedComponent {...this.props} />;
    }
  }

  _DropdownCloser.propTypes = {
    onClose: PropTypes.func.isRequired
  };

  return _DropdownCloser;
};

export default DropdownCloser;
