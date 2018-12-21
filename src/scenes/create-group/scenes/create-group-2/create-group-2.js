import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import CreateGroup1 from "../create-group-1";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentDiscover from "./components/content-discover";
import ContentError from "./components/content-error";

class CreateGroup2 extends Component {
  constructor(props) {
    super(props);
    const {
      data: { discoverability = undefined },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      discoverability: {
        data: discoverability,
        error: false,
        errorMsg: "You must choose an option"
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

    if (this.checkForm()) console.log("ok!");
  }

  checkForm() {
    const { discoverability } = this.state;

    const discoverabilityCheck = this.checkInput(
      "discoverability",
      discoverability.data
    );

    return discoverabilityCheck;
  }

  checkInput(id, value) {
    if (value === undefined)
      this.setState(prev => ({
        [id]: {
          ...prev[id],
          error: true
        }
      }));
    else {
      this.setState(prev => ({
        [id]: {
          ...prev[id],
          error: false
        }
      }));
      return true;
    }
    return false;
  }

  handleChange(newSelection) {
    const { discoverability } = this.state;
    const { setData } = this.props;

    const value =
      newSelection === discoverability.data ? undefined : newSelection;

    setData({ discoverability: value });

    this.setState(
      prev => ({
        discoverability: {
          ...prev.discoverability,
          data: value
        }
      }),
      this.checkInput.bind(this, "discoverability", value)
    );
  }

  render() {
    const { discoverability } = this.state;
    return (
      <ContentContainer>
        <ContentTitle>Discoverability</ContentTitle>
        <ContentDiscover
          onClick={this.handleChange}
          discoverability={discoverability.data}
        />
        {discoverability.error && (
          <ContentError>{discoverability.errorMsg}</ContentError>
        )}
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
  data: PropTypes.shape({ discoverability: PropTypes.number }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default CreateGroup2;
