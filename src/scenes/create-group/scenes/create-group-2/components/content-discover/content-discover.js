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
      description={t("createGroup:discoverabilityOptions.public")}
      selected={
        // eslint-disable-next-line
        discoverability === true
          ? true
          : discoverability === undefined
          ? undefined
          : false
      }
      onClick={() => onClick(true)}
    />
    <DiscoverOption
      icon="users"
      title={t("glossary:private")}
      description={t("createGroup:discoverabilityOptions.private")}
      selected={
        // eslint-disable-next-line
        discoverability === false
          ? true
          : discoverability === undefined
          ? undefined
          : false
      }
      onClick={() => onClick(false)}
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
  discoverability: PropTypes.bool
};

export default withNamespaces()(ContentDiscover);
