import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import PreviewContainer from "./components/preview-container";
import Image from "../../../../../../../image";
import Text from "../../../../../../../text";
import Stadium from "../../../../../../../stadium";

const MediaGroupPreview = ({
  theme,
  groupName,
  groupAvatar,
  groupTheme,
  groupCategory,
  placeholderColor
}) => (
  <PreviewContainer
    style={{ backgroundColor: !groupAvatar && theme[`group${_.capitalize(groupTheme)}Color`] }}
  >
    {// eslint-disable-next-line
    groupAvatar && (
      <Image
        // eslint-disable-next-line
        src={_.replace(groupAvatar, "medium", "large")}
        objectFit="cover"
        style={{
          filter: "brightness(75%)",
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
      />
    )}
    <Text
      weight={700}
      style={{
        marginTop: 20,
        zIndex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 36,
        textAlign: "center",
        color: "#ffffff"
      }}
    >
      {groupName}
    </Text>
    {groupTheme && (
      <Stadium
        // eslint-disable-line
        radius="extra-extra-small"
        scale="x2"
        backgroundColor="white"
        style={{ marginTop: 10, zIndex: 1 }}
        component={Text}
        type="h5"
        weight={700}
        contentStyle={{
          color: groupAvatar ? theme.fontColor : theme[`group${_.capitalize(groupTheme)}Color`]
        }}
      >
        {groupCategory}
      </Stadium>
    )}
  </PreviewContainer>
);

MediaGroupPreview.defaultProps = {
  placeholderColor: undefined
};

MediaGroupPreview.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  placeholderColor: PropTypes.string
};

export default withTheme(MediaGroupPreview);
