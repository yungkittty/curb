import React, { Component } from "react";
import PropTypes from "prop-types";
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
      data: {
        theme: {
          value = undefined,
          error = false,
          errorMsg = "You must choose a theme"
        } = {}
      },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      theme: {
        value,
        error,
        errorMsg
      }
    };

    this.sumbit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 4, total: 4 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(CreateGroup3, -1));
    setButtonTitle("Finish");
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const {
      data: { name, discoverability, modules, theme },
      postGroup
    } = this.props;

    postGroup({
      name: name.value,
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

    this.setState(prev => {
      const obj = {
        [id]: {
          ...prev[id],
          value,
          error: value === undefined
        }
      };
      setData(obj);
      return obj;
    });

    return value !== undefined;
  }

  handleChange(clickValue) {
    const {
      theme: { value }
    } = this.state;
    const newValue = clickValue === value ? undefined : clickValue;

    this.checkInput("theme", newValue);
  }

  render() {
    const {
      theme: { value, error, errorMsg }
    } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>Theme</ContentTitle>
        {error && <ContentError>{errorMsg}</ContentError>}
        <ContentThemes onClick={this.handleChange} value={value} />
      </ContentContainer>
    );
  }
}

CreateGroup4.defaultProps = {
  postGroup: () => null,
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
  postGroup: PropTypes.func,
  data: PropTypes.shape({ theme: PropTypes.object }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default CreateGroup4;
