import React from "react";
import Button from "../../../../../../../../components/button";
import Icon from "../../../../../../../../components/icon";

const InputButtonIcon = props => (
  <Button
    // eslint-disable-line
    {...props}
    component={Icon}
    style={{
      position: "absolute",
      right: 15
    }}
  />
);

export default InputButtonIcon;
