import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import InfoContainer from "./components/info-container";
import InfoList from "./components/info-list";
import InfoListItemUser from "./components/info-list-item-user";
import InfoListItemMediaType from "./components/info-list-item-media-type";

const GroupListItemInfo = ({
  // eslint-disable-line
  groupUsersId,
  groupMediaTypes,
  theme,
  t
}) => (
  <InfoContainer>
    <InfoList
      text={t("infosTitleUser")}
      data={groupUsersId}
      keyExtractor={groupUserId => groupUserId}
      renderItem={({ item: userId }) => (
        <InfoListItemUser
          // eslint-disable-line
          userId={userId}
          theme={theme}
        />
      )}
    />
    <InfoList
      text={t("infosTitleModules")}
      data={groupMediaTypes}
      keyExtractor={groupMediaType => groupMediaType}
      renderItem={({ item: groupMediaType }) => (
        <InfoListItemMediaType
          // eslint-disable-line
          groupMediaType={groupMediaType}
          theme={theme}
        />
      )}
    />
  </InfoContainer>
);

GroupListItemInfo.propTypes = {
  groupUsersId: PropTypes.array.isRequired, // eslint-disable-line
  groupMediaTypes: PropTypes.array.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default withTranslation("group")(GroupListItemInfo);
