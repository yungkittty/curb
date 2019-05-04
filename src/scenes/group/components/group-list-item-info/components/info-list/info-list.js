/* eslint-disable */

import React from "react";
import ListContainer from "./components/list-container";
import ListFlat from "../../../../../../components/list-flat";
import ListHeaderCircleText from "../../../../../../components/list-header-circle-text";

const InfoList = ({ text, ...others }) => (
  <ListContainer>
    <ListHeaderCircleText>
      {/* eslint-disable-line */}
      {text}
    </ListHeaderCircleText>
    <ListFlat
      // eslint-disable-lien
      {...others}
      getItemLayout={(_, itemIndex) => ({ length: 140, offset: 140 * itemIndex })}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  </ListContainer>
);

export default InfoList;
