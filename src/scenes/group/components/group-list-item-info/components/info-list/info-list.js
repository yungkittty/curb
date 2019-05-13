import React from "react";
import PropTypes from "prop-types";
import ListContainer from "./components/list-container";
import ListTitle from "./components/list-title";
import ListList from "./components/list-list";

const InfoList = ({ text, ...others }) => (
  <ListContainer>
    <ListTitle type="h3" weight={500}>
      {/* eslint-disable-line */}
      {text}
    </ListTitle>
    <ListList {...others} />
  </ListContainer>
);

InfoList.propTypes = { text: PropTypes.string.isRequired };

export default InfoList;
