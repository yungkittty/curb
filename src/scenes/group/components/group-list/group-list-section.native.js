import React from "react";
import ListSection from "../../../../components/list-section";

/** @todo: pull_to_refresh! */

const GroupListSection = props => (
  <ListSection
    // eslint-disable-line
    {...props}
    contentContainerStyle={{
      display: "flex",
      alignItems: "center"
    }}
  />
);

export default GroupListSection;
