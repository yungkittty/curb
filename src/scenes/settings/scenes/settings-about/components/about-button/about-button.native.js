import React from "react";
import Stadium from "../../../../../../components/stadium";
import Text from "../../../../../../components/text";

const AboutButton = ({ onClick, children }) => (
  <Stadium
    radius="small"
    gradientAngle={270}
    gradientColors={["#7B4BF3", "#2F80ED"]}
    contentStyle={{ color: "white", fontWeight: "bold" }}
    component={Text}
    style={{ position: "absolute", bottom: 35, cursor: "pointer" }}
    onClick={onClick}
  >
    {children}
  </Stadium>
);

export default AboutButton;
