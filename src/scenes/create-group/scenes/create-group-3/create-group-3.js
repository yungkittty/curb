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
      data: { modulesList = [] },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      modulesList: {
        data: modulesList,
        error: false,
        errorMsg: "You must choose at least one module"
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
    const { modulesList } = this.state;

    const modulesListCheck = this.checkInput("modulesList", modulesList.data);

    return modulesListCheck;
  }

  checkInput(id, value) {
    if (value.length === 0)
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

  handleChange(selection) {
    const { modulesList } = this.state;
    const { setData } = this.props;

    const value = modulesList.data;

    if (_.includes(value, selection)) _.pull(value, selection);
    else value.push(selection);

    setData({ modulesList: value });

    this.setState(
      prev => ({
        modulesList: {
          ...prev.modulesList,
          data: value
        }
      }),
      this.checkInput.bind(this, "modulesList", value)
    );
  }

  render() {
    const { modulesList } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>Modules</ContentTitle>
        <ContentModules
          onClick={this.handleChange}
          modules={modulesList.data}
        />
        {modulesList.error && (
          <ContentError>{modulesList.errorMsg}</ContentError>
        )}
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
  data: PropTypes.shape({ modulesList: PropTypes.array }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default CreateGroup3;
