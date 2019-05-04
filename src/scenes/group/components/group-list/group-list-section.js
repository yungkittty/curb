import React from "react";
import ListSection from "../../../../components/list-section";

const GroupListSection = ({ isFeed, ...others }) => (
  <ListSection {...others} contentContainerStyle={{ alignItems: isFeed ? "center" : undefined }} />
);

export default GroupListSection;
