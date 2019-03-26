import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { withNamespaces } from "react-i18next";
import ImagePicker from "react-native-image-picker";
import Button from "../../../button";

const ImageInput = styled(Button).attrs(({ t, onSelect }) => ({
  onClick: () => {
    ImagePicker.showImagePicker(
      {
        title: t("selectImage"),
        takePhotoButtonTitle: t("takePhoto"),
        chooseFromLibraryButtonTitle: t("chooseLibrary"),
        cancelButtonTitle: t("cancel"),
        mediaTypes: "photo",
        maxWidth: 1024,
        maxHeight: 1024,
        noData: true,
        allowsEditing: true,
        storageOptions: {
          cameraRoll: false,
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
            type: response.type,
            name: response.fileName
          });
        }
      }
    );
  },
  children: <React.Fragment />
}))`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default withNamespaces("common")(ImageInput);
