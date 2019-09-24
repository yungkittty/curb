import _ from "lodash";
import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import QrContainer from "./components/qr-container";
import QrHeader from "./components/qr-group-header";
import ImageGroup from "../../../../components/image-group";
import QrTitle from "./components/qr-title";
import QrCode from "../../../../components/qr-code";
import { platformBools } from "../../../../configurations/platform";
import ButtonPasteToClipboard from "../../../../components/button-paste-to-clipboard";

class GroupQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ text: "QR Code" });
  }

  render() {
    const {
      // eslint-disable-line
      t,
      theme,
      isFetchingGroups,
      groupId,
      groupName,
      groupStatus,
      groupInviteToken,
      groupTheme
    } = this.props;
    const qrCodeValue = `https://curb-app.com/groups/${groupId}${
      groupInviteToken ? `?inviteToken=${groupInviteToken}` : ``
    }`;
    return isFetchingGroups || (groupStatus === "private" && !groupInviteToken) ? (
      <Loader />
    ) : (
      <QrContainer>
        <QrHeader>
          <ImageGroup
            // eslint-disable-line
            groupId={groupId}
            size="large"
            style={{ marginRight: platformBools.isWeb ? 40 : 20 }}
          />
          <QrTitle type="h2" weight={700}>
            {groupName}
          </QrTitle>
        </QrHeader>
        <QrCode value={qrCodeValue} size={platformBools.isWeb ? 240 : 200} />
        <ButtonPasteToClipboard
          style={{ marginTop: 40 }}
          backgroundColor={theme[`group${_.capitalize(groupTheme)}Color`]}
          text={groupInviteToken ? t("copyInvitationLink") : t("copyGroupLink")}
          valueToPaste={
            platformBools.isWeb ? _.replace(qrCodeValue, "curb-app.com", window.location.host) : qrCodeValue
          }
        />
      </QrContainer>
    );
  }
}

GroupQr.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  setAppModalHeaderText: PropTypes.func.isRequired,
  isFetchingGroups: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupInviteToken: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withTheme,
  withTranslation("common")
])(GroupQr);
