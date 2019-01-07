import React from "react";
import PropTypes from "prop-types";
import DiscoverContainer from "./components/discover-container";
import DiscoverOption from "./components/discover-option";

const ContentDiscover = ({ onClick, discoverability }) => (
  <DiscoverContainer>
    <DiscoverOption
      icon="globe"
      title="Public"
      description="Your group will be visible by everyone through the discovery"
      selected={discoverability !== undefined && discoverability === true}
      onClick={() => onClick(true)}
    />
    <DiscoverOption
      icon="users"
      title="Private"
      description="Your group will only be accessible by invitation"
      selected={discoverability !== undefined && discoverability === false}
      onClick={() => onClick(false)}
    />
  </DiscoverContainer>
);

ContentDiscover.defaultProps = {
  onClick: undefined,
  discoverability: undefined
};

ContentDiscover.propTypes = {
  onClick: PropTypes.func,
  discoverability: PropTypes.bool
};

export default ContentDiscover;
