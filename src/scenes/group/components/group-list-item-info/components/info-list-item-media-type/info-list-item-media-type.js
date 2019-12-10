import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListItemCircleText from "../../../../../../components/list-item-circle-text"; // !
import Icon from "../../../../../../components/icon";
import modulesList from "../../../../../../utils/modules-list";

const InfoListItemMediaType = ({ groupMediaType, theme, t }) => {
  const { icon } = _.find(modulesList, ["id", groupMediaType]) || {};
  return (
    <ListItemCircleText
      component={Icon}
      icon={icon || "exclamation-triangle"}
      size="large"
      color={theme.fontColor}
      text={t(`${icon ? groupMediaType : "unknown"}.title`)}
      style={{ opacity: icon ? 1 : 0.2 }}
    />
  );
};

InfoListItemMediaType.propTypes = {
  groupMediaType: PropTypes.array.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default withTranslation("modules")(InfoListItemMediaType);
