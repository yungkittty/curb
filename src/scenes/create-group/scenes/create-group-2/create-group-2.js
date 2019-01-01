import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import CreateGroup1 from "../create-group-1";
/* eslint-disable-next-line */
import CreateGroup3 from "../create-group-3";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentDiscover from "./components/content-discover";
import ContentError from "./components/content-error";

class CreateGroup2 extends Component {
  constructor(props) {
    super(props);
    const {
      data: {
        discoverability: {
          value = undefined,
          error = false,
          errorMsg = "You must choose an option"
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
      discoverability: {
        value,
        error,
        errorMsg
      }
    };

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 2, total: 4 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(CreateGroup1, -1));
    setButtonTitle("Next");
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
      discoverability: { value }
    } = this.state;
    const newValue = clickValue === value ? undefined : clickValue;

    this.checkInput("discoverability", newValue);
  }

  render() {
    const {
      discoverability: { value, error, errorMsg }
    } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>Discoverability</ContentTitle>
        {error && <ContentError>{errorMsg}</ContentError>}
        <ContentDiscover onClick={this.handleChange} discoverability={value} />
      </ContentContainer>
    );
  }
}

CreateGroup2.defaultProps = {
  data: { discoverability: undefined },
  setData: undefined,
  setProgress: undefined,
  setLeftIcon: undefined,
  setLeftClick: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

CreateGroup2.propTypes = {
  data: PropTypes.shape({ discoverability: PropTypes.object }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default CreateGroup2;
