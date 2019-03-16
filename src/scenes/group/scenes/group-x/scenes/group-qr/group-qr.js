import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../../components/container";
import QrGroupHeader from "./components/qr-group-header";
import QrQr from "./components/qr-qr";

class GroupQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ headerText: "QR Code" });
  }

  render() {
    // 507f1f77bcf86cd799439011?token=507f1f77bcf86cd799439011
    const currentGroupId = "507f1f77bcf86cd799439011";
    const currentGroupName = "Group";
    const currentGroupAvatarUrl =
      "https://image.noelshack.com/fichiers/2019/11/4/1552560029-trapeze-mob-detour-resize.png";
    const isCurrentGroupPublic = true;
    const currentGroupToken = "507f1f77bcf86cd799439011";
    return (
      <Container style={{ flex: 1, textAlign: "center" }}>
        <QrGroupHeader src={currentGroupAvatarUrl} name={currentGroupName} />
        <QrQr
          value={
            currentGroupId +
            (isCurrentGroupPublic ? "" : `?token=${currentGroupToken}`)
          }
          size={240}
        />
      </Container>
    );
  }
}

GroupQr.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired
};

export default GroupQr;

// langue : check discovery
