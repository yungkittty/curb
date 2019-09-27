import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AboutLogo from "./components/about-logo";
import AboutContainer from "./components/about-container";
import AboutTitle from "./components/about-title";
import Text from "../../../../components/text";
import Button from "../../../../components/button";
import Stadium from "../../../../components/stadium";
import withAppModal from "../../../../hocs/with-app-modal";
/* eslint-disable */
import Settings from "../../../settings";
import AboutLegalNotices from "./scenes/about-legal-notices";
import { platformBools } from "../../../../configurations/platform";
/* eslint-enable */

class SettingsAbout extends Component {
  constructor(props) {
    super(props);
    const {
      // eslint-disable-line
      setAppModalHeaderText,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      t
    } = this.props;

    this.goToPrev = this.goToPrev.bind(this);

    setAppModalHeaderText({ text: t("about.title") });
    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: this.goToPrev }]);
    setAppModalHeaderBackButton({ onClick: this.goToPrev });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: Settings, direction: -1 });
  }

  render() {
    const { t, setAppModalScene } = this.props;
    return (
      <AboutContainer>
        <AboutLogo />
        <AboutTitle type="h2" weight={700} style={{ marginTop: 65, marginBottom: 27 }}>
          Curb
        </AboutTitle>
        <Text style={{ color: "#BDBDBD" }}>
          {/* eslint-disable-line */}
          {`Version ${process.env.CURB_VERSION}`}
        </Text>
        <Stadium
          as={Button}
          onClick={() => setAppModalScene({ scene: AboutLegalNotices, direction: 1 })}
          radius="small"
          gradientAngle={90}
          gradientColors={["#2F80ED", "#7B4BF3"]}
          style={{ position: "absolute", bottom: platformBools.isNative ? 35 : 43 }}
        >
          <Text weight={700} style={{ color: "white" }}>
            {t("about.description")}
          </Text>
        </Stadium>
      </AboutContainer>
    );
  }
}

SettingsAbout.propTypes = {
  t: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("settings")
])(SettingsAbout);
