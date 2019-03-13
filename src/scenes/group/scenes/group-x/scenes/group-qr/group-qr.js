import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../../components/container";
import QrQr from "./components/qr-qr";

class GroupQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ headerText: "QR Code" });
  }

  render() {
    // 507f1f77bcf86cd799439011?token=507f1f77bcf86cd799439011
    const currentGroupId = "";
    const currentGroupName = "";
    const currentGroupAvatarUrl = "";
    const isCurrentGroupPublic = true;
    const currentGroupToken = "";
    return (
      <Container style={{ flex: 1 }}>
        <QrQr />
      </Container>
    );
  }
}

GroupQr.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired
};

export default GroupQr;

// langue : check discovery

// Recup id group + potentiellement token [idgroup]?token=[token]
// recuperer nom de groupe et urlimage
