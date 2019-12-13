import React from "react";
import Stadium from "../../../../../../../../components/stadium";
import Input from "../../../../../../../../components/input";
import withEnter from "./hocs/with-enter";

const InputInput = props => (
  <Stadium
    // eslint-disable-line
    {...props}
    as={Input}
    style={{
      width: "100%",
      minWidth: "100%",
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 50
    }}
  />
);

export default withEnter(InputInput);
