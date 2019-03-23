import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import ImagePicker from "react-native-image-picker";
import Button from "../../../button";

const ImageInput = styled(Button).attrs(({ onSelect }) => ({
  onClick: () => {
    ImagePicker.launchImageLibrary(
      {
        mediaTypes: "photo",
        maxWidth: 320,
        maxHeight: 320,
        noData: true,
        allowsEditing: true,
        storageOptions: {
          skipBackup: true
        }
      },
      response => {
        let source;
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          if (Platform.OS === "android") {
            source = { uri: response.uri, isStatic: true };
          } else {
            source = {
              uri: response.uri.replace("file://", ""),
              isStatic: true
            };
          }

          onSelect(source.uri, {
            uri: source.uri,
            type: "image/png",
            name: "image.png"
          });
        }
      }
    );
  },
  children: <React.Fragment />
}))`
  width: 100%;
  height: 100%;
`;

export default ImageInput;
