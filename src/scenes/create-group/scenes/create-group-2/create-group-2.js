import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import CreateGroup1 from "../create-group-1";
/* eslint-disable-next-line */
import CreateGroup3 from "../create-group-3";
import CreateGroup2Container from "./components/create-group-2-container";
import CreateGroup2Title from "./components/create-group-2-title";
import CreateGroup2Discover from "./components/create-group-2-discover";
import CreateGroup2Error from "./components/create-group-2-error";

class CreateGroup2 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      data: { discoverability = { value: undefined, error: undefined } },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      discoverability
    };

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 2, total: 4 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(CreateGroup1, -1));
    setButtonTitle(t("common:next"));
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    const { setComponent } = this.props;

    if (this.checkForm()) setComponent(CreateGroup3, 1);
  }

  checkForm() {
    const {
      discoverability: { value }
    } = this.state;

    return this.checkInput("discoverability", value);
  }

  checkInput(id, value) {
    const { setData } = this.props;

    const error = value === undefined ? "missing" : undefined;

    this.setState(prev => {
      const obj = {
        [id]: {
          ...prev[id],
          value,
          error
        }
      };
      setData(obj);
      return obj;
    });

    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      discoverability: { value }
    } = this.state;

    const newValue = clickValue === value ? undefined : clickValue;

    this.checkInput("discoverability", newValue);
  }

  render() {
    const { t } = this.props;
    const {
      discoverability: { value, error }
    } = this.state;

    return (
      <CreateGroup2Container>
        <CreateGroup2Title>
          {t("createGroup:discoverability")}
        </CreateGroup2Title>
        {error && (
          <CreateGroup2Error>
            {t(`validation:discoverability.${error}`)}
          </CreateGroup2Error>
        )}
        <CreateGroup2Discover
          onClick={this.handleChange}
          discoverability={value}
        />
      </CreateGroup2Container>
    );
  }
}

CreateGroup2.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({ discoverability: PropTypes.object }).isRequired,
  setData: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  setLeftIcon: PropTypes.func.isRequired,
  setLeftClick: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.func.isRequired,
  setButtonClick: PropTypes.func.isRequired
};

export default withNamespaces()(CreateGroup2);
