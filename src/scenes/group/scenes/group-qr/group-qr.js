import React from "react";
import PropTypes from "prop-types";
import QrCode from "react-qr-code";
import Loader from "../../../../components/loader";
import QrContainer from "./components/qr-container";
import QrHeader from "./components/qr-group-header";
import ImageGroup from "../../../../components/image-group";
import QrTitle from "./components/qr-title";
import { platformBools } from "../../../../configurations/platform";

class GroupQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ text: "QR Code" });
  }

  render() {
    const {
      // eslint-disable-line
      isFetchingGroups,
      groupId,
      groupName,
      groupInviteToken
    } = this.props;

    return isFetchingGroups ? (
      <Loader />
    ) : (
      <QrContainer>
        <QrHeader>
          <ImageGroup
            groupId={groupId}
            size="large"
            style={{ marginRight: platformBools.isReact ? 40 : 20 }}
          />
          <QrTitle type="h2" weight={700}>
            {groupName}
          </QrTitle>
        </QrHeader>
        <QrCode
          value={JSON.stringify({ id: groupId, inviteToken: groupInviteToken })}
          size={platformBools.isReact ? 240 : 200}
        />
      </QrContainer>
    );
  }
}

GroupQr.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  isFetchingGroups: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupInviteToken: PropTypes.string.isRequired
};

export default GroupQr;
