import React from "react";
import PropTypes from "prop-types";
import QrCode from "react-qr-code";
import Loader from "../../../../components/loader";
import QrContainer from "./components/qr-container";
import QrHeader from "./components/qr-group-header";
import QrTitle from "./components/qr-title";
import QrImage from "./components/qr-image";
import { platformBools } from "../../../../configurations/platform";

class GroupQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ text: "QR Code" });
  }

  render() {
    const {
      isFetchingCurrentGroup,
      currentGroupId,
      currentGroupName,
      currentGroupAvatarUrl,
      currentGroupStatus,
      currentGroupInviteToken
    } = this.props;

    return isFetchingCurrentGroup ? (
      <Loader />
    ) : (
      <QrContainer>
        <QrHeader>
          <QrImage src={`${process.env.REACT_APP_API_URL}${currentGroupAvatarUrl}`} />
          <QrTitle type="h2" weight={700}>
            {currentGroupName}
          </QrTitle>
        </QrHeader>
        <QrCode
          value={`${currentGroupId}${
            currentGroupStatus === "private" ? `?token=${currentGroupInviteToken}` : ""
          }`}
          size={platformBools.isReact ? 240 : 200}
        />
      </QrContainer>
    );
  }
}

GroupQr.propTypes = {
  isFetchingCurrentGroup: PropTypes.bool.isRequired,
  currentGroupId: PropTypes.string.isRequired,
  currentGroupName: PropTypes.string.isRequired,
  currentGroupAvatarUrl: PropTypes.string.isRequired,
  currentGroupStatus: PropTypes.string.isRequired,
  currentGroupInviteToken: PropTypes.string.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired
};

export default GroupQr;
