import React from "react";
import PropTypes from "prop-types";
import ListItemCircleText from "../../../../../../components/list-item-circle-text"; // !
import Button from "../../../../../../components/button";
import GroupImageUser from "../../../group-image-user";
import withUser from "../../../../../../hocs/with-user";

const InfoListItemUser = ({
  // eslint-disable-line
  userId,
  userName,
  groupCreatorId,
  groupGradientColors,
  theme
}) => (
  <ListItemCircleText
    as={Button}
    onClick={`/users/${userId}`}
    component={GroupImageUser}
    shouldFetch={false}
    userId={userId}
    groupCreatorId={groupCreatorId}
    groupGradientColors={groupGradientColors}
    size="large"
    placeholderColor={theme.primaryVariantColor}
    text={userName}
  />
);

InfoListItemUser.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  groupCreatorId: PropTypes.string.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withUser(InfoListItemUser);
