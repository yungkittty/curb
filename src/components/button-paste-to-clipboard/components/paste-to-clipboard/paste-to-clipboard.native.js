import React from "react";
import PropTypes from "prop-types";
import { Clipboard } from "react-native";

const PasteToClipboard = WrappedComponent => {
  class _PasteToClipboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isPasted: false
      };
    }

    render() {
      const { valueToPaste } = this.props;
      const { isPasted } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          isPasted={isPasted}
          onClick={
            !isPasted
              ? () => {
                  Clipboard.setString(valueToPaste);
                  this.setState({ isPasted: true });
                }
              : undefined
          }
        />
      );
    }
  }

  _PasteToClipboard.propTypes = {
    valueToPaste: PropTypes.string.isRequired
  };

  return _PasteToClipboard;
};

export default PasteToClipboard;
