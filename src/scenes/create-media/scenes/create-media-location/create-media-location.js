import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withAppModal from "../../../../hocs/with-app-modal";
import withCurrentUser from "../../../../hocs/with-current-user";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import LocationMap from "./components/location-container";
import createMedia from "../../../create-media"; // eslint-disable-line

class CreateMediaLocation extends Component {
  constructor(props) {
    super(props);
    this.locationMap = React.createRef();
    this.goToPrev = this.goToPrev.bind(this);
    this.submit = this.submit.bind(this);
    const { t, setAppModalHeaderText, setAppModalHeaderLeftButton, setAppModalFooterButton } = props;
    setAppModalHeaderText({ text: t("modules:location.title") });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:post"), onClick: this.submit });
  }

  submit() {
    const { current: locationMap } = this.locationMap;
    const { postMediaLocation, groupId, currentUserId } = this.props;
    const data = locationMap.getCurrentPosition();
    postMediaLocation({
      groupId,
      userId: currentUserId,
      data
    });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: createMedia, direction: -1 });
  }

  render() {
    return (
      <AppModalSceneContainer verticalAlign>
        <LocationMap ref={this.locationMap} isMarkerShown draggable />
      </AppModalSceneContainer>
    );
  }
}

CreateMediaLocation.propTypes = {
  t: PropTypes.func.isRequired,
  postMediaLocation: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired
};

export default _.flowRight([withAppModal, withCurrentUser, withTranslation()])(CreateMediaLocation);
