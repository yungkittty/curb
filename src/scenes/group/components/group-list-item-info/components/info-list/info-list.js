import React from "react";
import PropTypes from "prop-types";
import ListContainer from "./components/list-container";
import ListHeaderCircleText from "../../../../../../components/list-header-circle-text";
import ListCircleText from "../../../../../../components/list-circle-text";

const InfoList = ({ text, ...others }) => (
  <ListContainer>
    <ListHeaderCircleText type="h3" weight={500}>
      {/* eslint-disable-line */}
      {text}
    </ListHeaderCircleText>
    <ListCircleText {...others} />
  </ListContainer>
);

InfoList.propTypes = { text: PropTypes.string.isRequired };

export default InfoList;
