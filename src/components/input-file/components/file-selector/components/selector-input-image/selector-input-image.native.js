import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { withTranslation } from "react-i18next";
import ImagePicker from "react-native-image-picker";
import Button from "../../../../../button";

// https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Reference.md

const SelectorInputImage = ({ t, onSelect, ...others }) => (
  <Button
    {...others}
    onClick={() => {
      ImagePicker.showImagePicker(
        {
          title: t("selectImage"),
          takePhotoButtonTitle: t("takePhoto"),
          chooseFromLibraryButtonTitle: t("chooseLibrary"),
          cancelButtonTitle: t("cancel"),
          mediaType: "photo",
          maxWidth: 1024,
          maxHeight: 1024,
          quality: 1,
          noData: true,
          allowsEditing: true,
          permissionDenied: {
            title: t("permissionDenied"),
            text: t("askCameraText"),
            reTryTitle: t("authorize"),
            okTitle: t("cancel")
          }
        },
        response => {
          if (!response.didCancel && !response.error && !response.customButton) {
            const uri = Platform.OS === "android" ? response.uri : response.uri.replace("file://", "");
            const type =
              Platform.OS === "android"
                ? response.path.substr(response.path.lastIndexOf(".") + 1)
                : uri.substr(uri.lastIndexOf(".") + 1);
            onSelect(uri, {
              uri,
              type: `image/${type}`,
              name: `image.${type}`
            });
          }
        }
      );
    }}
  >
    <React.Fragment />
  </Button>
);

SelectorInputImage.propTypes = { t: PropTypes.func.isRequired, onSelect: PropTypes.func.isRequired };

export default withTranslation("common")(SelectorInputImage);
