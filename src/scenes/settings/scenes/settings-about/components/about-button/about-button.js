import React from "react";
import Stadium from "../../../../../../components/stadium";
import Button from "../../../../../../components/button";
import Text from "../../../../../../components/text";
import { platformBools } from "../../../../../../configurations/platform";

const AboutButton = props => (
  <Stadium
    {...props}
    as={Button}
    radius="small"
    gradientAngle={90}
    gradientColors={["#2F80ED", "#7B4BF3"]}
    contentStyle={{ color: "white", fontWeight: "bold" }}
    component={Text}
    style={{ position: "absolute", bottom: platformBools.isNative ? 35 : 43 }}
  />
);

export default AboutButton;
