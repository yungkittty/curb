import React from "react";
import PropTypes from "prop-types";
import TestFairy from "react-native-testfairy";
import { Platform } from "react-native";
import { withTranslation } from "react-i18next";
import ImagePicker from "react-native-image-picker";
import Button from "../../../../../button";

// https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Reference.md

const SelectorInputVideo = ({ t, onSelect, ...others }) => (
  <Button
    {...others}
    onClick={() => {
      ImagePicker.showImagePicker(
        {
          title: t("selectVideo"),
          takePhotoButtonTitle: t("recordVideo"),
          chooseFromLibraryButtonTitle: t("chooseLibrary"),
          cancelButtonTitle: t("cancel"),
          mediaType: "video",
          videoQuality: "high",
          permissionDenied: {
            title: t("permissionDenied"),
            text: t("askStorageText"),
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
            TestFairy.log(uri);
            TestFairy.log(type);
            onSelect(uri, {
              uri,
              type: `video/${type}`,
              name: `video.${type}`
            });
          }
        }
      );
    }}
  >
    <React.Fragment />
  </Button>
);

SelectorInputVideo.propTypes = { t: PropTypes.func.isRequired, onSelect: PropTypes.func.isRequired };

export default withTranslation("common")(SelectorInputVideo);
