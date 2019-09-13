import React from "react";
import PropTypes from "prop-types";

const PasteToClipboard = WrappedComponent => {
  class _PasteToClipboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isPasted: false
      };

      this.onClick = this.onClick.bind(this);
    }

    onClick() {
      const { isPasted } = this.state;
      const { valueToPaste } = this.props;
      if (!isPasted) {
        navigator.clipboard.writeText(valueToPaste).then(() => {
          this.setState({ isPasted: true });
        });
      }
    }

    render() {
      const { isPasted } = this.state;
      return <WrappedComponent {...this.props} isPasted={isPasted} onClick={this.onClick} />;
    }
  }

  _PasteToClipboard.propTypes = {
    valueToPaste: PropTypes.string.isRequired
  };

  return _PasteToClipboard;
};

export default PasteToClipboard;
