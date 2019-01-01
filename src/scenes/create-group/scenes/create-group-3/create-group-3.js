import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import CreateGroup2 from "../create-group-2";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentModules from "./components/content-modules";
import ContentError from "./components/content-error";

class CreateGroup3 extends Component {
  constructor(props) {
    super(props);
    const {
      data: {
        modulesList: {
          value = [],
          error = false,
          errorMsg = "You must choose at least one module"
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
      modulesList: {
        value,
        error,
        errorMsg
      }
    };

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 3, total: 4 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(CreateGroup2, -1));
    setButtonTitle("Next");
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    const { setComponent } = this.props;

    if (this.checkForm()) console.log("ok!");
  }

  checkForm() {
    const {
      modulesList: { value }
    } = this.state;

    return this.checkInput("modulesList", value);
  }

  checkInput(id, value) {
    const { setData } = this.props;

    this.setState(prev => {
      const obj = {
        [id]: {
          ...prev[id],
          value,
          error: value.length === 0
        }
      };
      setData(obj);
      return obj;
    });

    return value.length !== 0;
  }

  handleChange(clickValue) {
    const {
      modulesList: { value }
    } = this.state;
    const newValue = value;

    if (_.includes(newValue, clickValue)) _.pull(newValue, clickValue);
    else newValue.push(clickValue);

    this.checkInput("modulesList", newValue);
  }

  render() {
    const {
      modulesList: { value, error, errorMsg }
    } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>Modules</ContentTitle>
        {error && <ContentError>{errorMsg}</ContentError>}
        <ContentModules onClick={this.handleChange} modules={value} />
      </ContentContainer>
    );
  }
}

CreateGroup3.defaultProps = {
  data: { modulesList: undefined },
  setData: undefined,
  setProgress: undefined,
  setLeftIcon: undefined,
  setLeftClick: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

CreateGroup3.propTypes = {
  data: PropTypes.shape({ modulesList: PropTypes.object }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default CreateGroup3;
