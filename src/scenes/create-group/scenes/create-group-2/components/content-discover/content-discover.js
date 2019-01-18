import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import DiscoverContainer from "./components/discover-container";
import DiscoverOption from "./components/discover-option";

const ContentDiscover = ({ t, onClick, discoverability }) => (
  <DiscoverContainer>
    <DiscoverOption
      icon="globe"
      title={t("glossary:public")}
      description={t("discoverabilityOptions.public")}
      selected={
        discoverability === undefined ? undefined : discoverability === "public"
      }
      onClick={() => onClick("public")}
    />
    <DiscoverOption
      icon="users"
      title={t("glossary:private")}
      description={t("discoverabilityOptions.private")}
      selected={
        discoverability === undefined
          ? undefined
          : discoverability === "private"
      }
      onClick={() => onClick("private")}
    />
  </DiscoverContainer>
);

ContentDiscover.defaultProps = {
  onClick: undefined,
  discoverability: undefined
};

ContentDiscover.propTypes = {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  discoverability: PropTypes.string
};

export default withNamespaces("createGroup")(ContentDiscover);
