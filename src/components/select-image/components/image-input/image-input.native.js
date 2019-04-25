import React from "react";
import TestFairy from "react-native-testfairy";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { withTranslation } from "react-i18next";
import ImagePicker from "react-native-image-picker";
import Button from "../../../button";

// https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Reference.md

const ImageInput = ({ t, onSelect, ...others }) => (
  <Button
    {...others}
    onClick={() => {
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
          },
          permissionDenied: {
            title: t("permissionDenied"),
            text: t("askCameraText"),
            reTryTitle: t("authorize"),
            okTitle: t("cancel")
          }
        },
        response => {
          if (response.didCancel) {
            console.log("User cancelled image picker");
          } else if (response.error) {
            console.log("ImagePicker Error: ", response.error);
          } else if (response.customButton) {
            console.log("User tapped custom button: ", response.customButton);
          } else {
            TestFairy.log(response);
            const uri = Platform.OS === "android" ? response.uri : response.uri.replace("file://", "");
            onSelect(uri, {
              uri,
              type: response.type,
              name: "image.jpg"
            });
          }
        }
      );
    }}
  >
    <React.Fragment />
  </Button>
);

ImageInput.propTypes = { t: PropTypes.func.isRequired, onSelect: PropTypes.func.isRequired };

export default withTranslation("common")(ImageInput);
