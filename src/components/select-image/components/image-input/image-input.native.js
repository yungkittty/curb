import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { withTranslation } from "react-i18next";
import ImagePicker from "react-native-image-picker";
import Button from "../../../button";

// https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Reference.md

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
          cameraRoll: true,
          skipBackup: true
        },
        permissionDenied: {
          title: t("permissionDenied"),
          text: t("askCameraText"),
          reTryTitle: t("authorize"),
          okTitle: t("cancel")
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
            name: "image.jpg"
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

export default withTranslation("common")(ImageInput);
