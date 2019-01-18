import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import CreateGroup3 from "../create-group-3";
import CreateGroup4Container from "./components/create-group-4-container";
import CreateGroup4Title from "./components/create-group-4-title";
import CreateGroup4Themes from "./components/create-group-4-themes";
import CreateGroup4Error from "./components/create-group-4-error";

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
      postGroup,
      currentUserId,
      data: { groupName, discoverability, modules, theme }
    } = this.props;

    postGroup({
      creatorId: currentUserId,
      name: groupName.value,
      public: discoverability.value,
      mediaTypes: modules.value,
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
      <CreateGroup4Container>
        <CreateGroup4Title>{t("theme")}</CreateGroup4Title>
        {error && (
          <CreateGroup4Error>
            {t(`validation:theme.${error}`)}
          </CreateGroup4Error>
        )}
        <CreateGroup4Themes onClick={this.handleChange} value={value} />
      </CreateGroup4Container>
    );
  }
}

CreateGroup4.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({ theme: PropTypes.object }).isRequired,
  postGroup: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  setLeftIcon: PropTypes.func.isRequired,
  setLeftClick: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.func.isRequired,
  setButtonClick: PropTypes.func.isRequired
};

export default withNamespaces("createGroup")(CreateGroup4);
