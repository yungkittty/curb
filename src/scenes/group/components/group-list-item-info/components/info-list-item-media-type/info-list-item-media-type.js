/* eslint-disable */

import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListItemCircleText from "../../../../../../components/list-item-circle-text"; // !
import Icon from "../../../../../../components/icon";
import modulesList from "../../../../../../utils/modules-list";

const InfoListItemUser = ({ groupMediaType, theme, t }) => (
  <ListItemCircleText
    component={Icon}
    icon={_.find(modulesList, ["id", groupMediaType]).icon}
    size="large"
    color={theme.fontColor}
    text={t(`${groupMediaType}.title`)}
  />
);

export default withTranslation("modules")(InfoListItemUser);
