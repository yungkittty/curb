import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import LocationMap from "./components/location-container";
import createMedia from "../../../create-media"; // eslint-disable-line
import withAppModal from "../../../../hocs/with-app-modal";
import withCurrentUser from "../../../../hocs/with-current-user";
import withGroup from "../../../../hocs/with-group";

class CreateMediaLocation extends Component {
  constructor(props) {
    super(props);

    const {
      // eslint-disable-line
      t,
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalFooterButton
    } = props;

    this.locationMap = React.createRef();

    this.goToPrev = this.goToPrev.bind(this);
    this.submit = this.submit.bind(this);

    setAppModalHeaderText({ text: t("modules:location.title") });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:post"), onClick: this.submit });

    this.state = {
      isShowed: false,
      latitude: undefined,
      longitude: undefined
    };
  }

  componentDidMount() {
    const { geolocation } = navigator;
    setTimeout(() => {
      const { isShowed } = this.state;
      if (isShowed) return;
      this.setState({
        isShowed: true,
        latitude: 48.8566,
        longitude: 2.3522
      });
    }, 5000);
    geolocation.getCurrentPosition(
      // eslint-disable-line
      currentPosition => {
        const {
          // eslint-disable-line
          latitude,
          longitude
        } = currentPosition.coords;
        this.setState({
          isShowed: true,
          latitude,
          longitude
        });
      }
    );
  }

  componentDidUpdate(prevProps) {
    const { enableAppModalButtons, isFetchingMedias } = this.props;
    if (prevProps.isFetchingMedias && !isFetchingMedias) {
      // eslint-disable-next-line
      enableAppModalButtons();
    }
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: createMedia, direction: -1 });
  }

  submit() {
    const {
      // eslint-disable-line
      isShowed
    } = this.state;
    const {
      // eslint-disable-line
      current: locationMap
    } = this.locationMap;
    const {
      // eslint-disable-line
      disableAppModalButtons,
      postMediaLocation,
      groupId,
      currentUserId
    } = this.props;
    if (!isShowed) return;
    const location = JSON.stringify(locationMap.getCurrentPosition());
    disableAppModalButtons();
    postMediaLocation({
      groupId,
      userId: currentUserId,
      location
    });
  }

  render() {
    const {
      // eslint-disable-line
      isFetchingMedias
    } = this.props;
    const {
      // eslint-disable-line
      isShowed,
      latitude,
      longitude
    } = this.state;
    return isFetchingMedias || !isShowed ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <LocationMap
          // eslint-disable-line
          ref={this.locationMap}
          latitude={latitude}
          longitude={longitude}
          draggable
        />
      </AppModalSceneContainer>
    );
  }
}

CreateMediaLocation.propTypes = {
  postMediaLocation: PropTypes.func.isRequired,
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  isFetchingMedias: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withGroup,
  withTranslation()
])(CreateMediaLocation);
