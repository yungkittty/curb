import React from "react";
import PropTypes from "prop-types";
import ListItemCircleText from "../../../../../../components/list-item-circle-text"; // !
import Button from "../../../../../../components/button";
import ImageUser from "../../../../../../components/image-user";
import withUser from "../../../../../../hocs/with-user";

const InfoListItemUser = ({ userId, userName, theme }) => (
  <ListItemCircleText
    as={Button}
    onClick={`/users/${userId}`}
    component={ImageUser}
    shouldFetch={false}
    userId={userId}
    size="large"
    placeholderColor={theme.primaryVariantColor}
    text={userName}
  />
);

InfoListItemUser.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withUser(InfoListItemUser);
