import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import DiscoverContainer from "./components/discover-container";
import DiscoverOption from "./components/discover-option";

const GroupDiscoverability = ({ t, onClick, discoverability }) => (
  <DiscoverContainer>
    <DiscoverOption
      icon="users"
      title={t("glossary:public")}
      description={t("discoverabilityOptions.public")}
      selected={discoverability === undefined ? undefined : discoverability === "public"}
      onClick={() => onClick("public")}
    />
    <DiscoverOption
      icon="lock"
      title={t("glossary:private")}
      description={t("discoverabilityOptions.private")}
      selected={discoverability === undefined ? undefined : discoverability === "private"}
      onClick={() => onClick("private")}
    />
  </DiscoverContainer>
);

GroupDiscoverability.defaultProps = {
  discoverability: undefined
};

GroupDiscoverability.propTypes = {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  discoverability: PropTypes.string
};

export default withTranslation("groupSettings")(GroupDiscoverability);
