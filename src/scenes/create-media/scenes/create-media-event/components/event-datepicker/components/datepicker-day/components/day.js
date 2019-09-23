import React from "react";
import Button from "../../../../../../../../../components/button";
import Text from "../../../../../../../../../components/text";

const Day = ({ day, style }) => (
  <Button style={{ style, width: 12, height: 12, marginTop: 2, textAlign: "center" }}>
    <Text type="h7">{day}</Text>
  </Button>
);

export default Day;
