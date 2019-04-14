import React from "react";
import PropTypes from "prop-types";
import QrCode from "react-qr-code";
import QrContainer from "./components/qr-container";
import QrHeader from "./components/qr-group-header";
import QrTitle from "./components/qr-title";
import QrImage from "./components/qr-image";

class GroupQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ text: "QR Code" });
  }

  render() {
    const {
      currentGroupId,
      currentGroupName,
      currentGroupAvatarUrl,
      currentGroupStatus,
      currentGroupToken = ""
    } = this.props;

    return (
      <QrContainer>
        <QrHeader>
          <QrImage src={`${process.env.REACT_APP_API_URL}${currentGroupAvatarUrl}`} />
          <QrTitle type="h2" weight={700}>
            {currentGroupName}
          </QrTitle>
        </QrHeader>
        <QrCode
          value={currentGroupId + (currentGroupStatus ? "" : `?token=${currentGroupToken}`)}
          size={240}
        />
      </QrContainer>
    );
  }
}

GroupQr.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired
};

export default GroupQr;
