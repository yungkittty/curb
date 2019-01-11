import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import CreateGroup2 from "../create-group-2";
/* eslint-disable-next-line */
import CreateGroup4 from "../create-group-4";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentModules from "./components/content-modules";
import ContentError from "./components/content-error";

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
      <ContentContainer>
        <ContentTitle>{t("createGroup:modules")}</ContentTitle>
        {error && (
          <ContentError>{t(`validation:modules.${error}`)}</ContentError>
        )}
        <ContentModules onClick={this.handleChange} modules={value} />
      </ContentContainer>
    );
  }
}

CreateGroup3.defaultProps = {
  data: { modules: undefined },
  setData: undefined,
  setProgress: undefined,
  setLeftIcon: undefined,
  setLeftClick: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

CreateGroup3.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({ modules: PropTypes.object }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default withNamespaces()(CreateGroup3);
