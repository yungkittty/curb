import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import CreateGroup3 from "../create-group-3";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentThemes from "./components/content-themes";
import ContentError from "./components/content-error";

class CreateGroup4 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      data: {
        theme = {
          value: undefined,
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
      theme
    };

    this.sumbit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 4, total: 4 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(CreateGroup3, -1));
    setButtonTitle(t("common:finish"));
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const {
      data: { groupName, discoverability, modules, theme },
      postGroup
    } = this.props;

    postGroup({
      name: groupName.value,
      public: discoverability.value,
      modules: modules.value,
      theme: theme.value
    });
  }

  checkForm() {
    const {
      theme: { value }
    } = this.state;

    return this.checkInput("theme", value);
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
      theme: { value }
    } = this.state;
    const newValue = clickValue === value ? undefined : clickValue;

    this.checkInput("theme", newValue);
  }

  render() {
    const { t } = this.props;
    const {
      theme: { value, error }
    } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>{t("createGroup:theme")}</ContentTitle>
        {error && <ContentError>{t(`validation:theme.${error}`)}</ContentError>}
        <ContentThemes onClick={this.handleChange} value={value} />
      </ContentContainer>
    );
  }
}

CreateGroup4.defaultProps = {
  data: { theme: undefined },
  setData: undefined,
  setProgress: undefined,
  setLeftIcon: undefined,
  setLeftClick: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

CreateGroup4.propTypes = {
  t: PropTypes.func.isRequired,
  postGroup: PropTypes.func.isRequired,
  data: PropTypes.shape({ theme: PropTypes.object }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default withNamespaces()(CreateGroup4);
