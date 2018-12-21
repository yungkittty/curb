import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import CreateGroup1 from "../create-group-1";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentDiscover from "./components/content-discover";

class CreateGroup2 extends Component {
  constructor(props) {
    super(props);
    const {
      data: { groupName = "" },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      groupName: {
        data: groupName,
        error: false,
        errorMsg: "You must enter a group name"
      }
    };

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 2, total: 4 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(CreateGroup1, -1));
    setButtonTitle("Finish");
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    const { setComponent } = this.props;

    if (this.checkForm()) console.log("ok!");
  }

  checkForm() {
    const { groupName } = this.state;

    const groupNameCheck = this.checkInput("groupName", groupName.data);

    return groupNameCheck;
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

  handleChange(event) {
    const { setData } = this.props;
    const { id, value } = event.target;

    setData({ [id]: value });

    this.setState(
      prev => ({ [id]: { ...prev[id], data: value } }),
      this.checkInput.bind(this, id, value)
    );
  }

  render() {
    return (
      <ContentContainer>
        <ContentTitle>Discoverability</ContentTitle>
        <ContentDiscover />
      </ContentContainer>
    );
  }
}

CreateGroup2.defaultProps = {
  data: undefined,
  setData: undefined,
  setProgress: undefined,
  setLeftIcon: undefined,
  setLeftClick: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

CreateGroup2.propTypes = {
  data: PropTypes.shape({ name: PropTypes.string, email: PropTypes.string }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default CreateGroup2;
