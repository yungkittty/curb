/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import ListItemCircleText from "../../../../../../components/list-item-circle-text"; // !
import Icon from "../../../../../../components/icon";

const InfoListItemUser = ({ theme }) => (
  <ListItemCircleText
    // eslint-disable-line
    component={Icon}
    icon="user"
    size="large"
    color={theme.fontColor}
    text="video"
  />
);

export default InfoListItemUser;
