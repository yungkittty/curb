import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import CreateGroup2 from "../create-group-2";
/* eslint-disable-next-line */
import CreateGroup4 from "../create-group-4";
import CreateGroup3Container from "./components/create-group-3-container";
import CreateGroup3Title from "./components/create-group-3-title";
import CreateGroup3Modules from "./components/create-group-3-modules";
import CreateGroup3Error from "./components/create-group-3-error";

class CreateGroup3 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      data: {
        modules = {
          value: [],
          error: undefined
        }
      },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      modules
    };

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 3, total: 4 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(CreateGroup2, -1));
    setButtonTitle(t("common:next"));
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    const { setComponent } = this.props;

    if (this.checkForm()) setComponent(CreateGroup4, 1);
  }

  checkForm() {
    const {
      modules: { value }
    } = this.state;

    return this.checkInput("modules", value);
  }

  checkInput(id, value) {
    const { setData } = this.props;

    const error = value.length === 0 ? "missing" : undefined;

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
      modules: { value }
    } = this.state;
    const newValue = value;

    if (_.includes(newValue, clickValue)) _.pull(newValue, clickValue);
    else newValue.push(clickValue);

    this.checkInput("modules", newValue);
  }

  render() {
    const { t } = this.props;
    const {
      modules: { value, error }
    } = this.state;

    return (
      <CreateGroup3Container>
        <CreateGroup3Title>{t("modules")}</CreateGroup3Title>
        {error && (
          <CreateGroup3Error>
            {t(`validation:modules.${error}`)}
          </CreateGroup3Error>
        )}
        <CreateGroup3Modules onClick={this.handleChange} modules={value} />
      </CreateGroup3Container>
    );
  }
}

CreateGroup3.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({ modules: PropTypes.object }).isRequired,
  setData: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  setLeftIcon: PropTypes.func.isRequired,
  setLeftClick: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.func.isRequired,
  setButtonClick: PropTypes.func.isRequired
};

export default withNamespaces("createGroup")(CreateGroup3);
