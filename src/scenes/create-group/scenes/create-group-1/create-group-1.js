import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import CreateGroup2 from "../create-group-2";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import SelectImage from "./components/select-image";
import Input from "../../../../components/input";

class CreateGroup1 extends Component {
  constructor(props) {
    super(props);
    const {
      data: { groupName = "" },
      setProgress,
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

    setProgress({ progress: 1, total: 4 });
    setButtonTitle("Next");
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    const { setComponent } = this.props;

    if (this.checkForm()) setComponent(CreateGroup2, 1);
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
    const { groupName } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>Create group</ContentTitle>
        <SelectImage />
        <Input
          size="modal"
          id="groupName"
          placeholder="Group name"
          onChange={this.handleChange}
          value={groupName.data}
          error={groupName.error ? groupName.errorMsg : null}
        />
      </ContentContainer>
    );
  }
}

CreateGroup1.defaultProps = {
  data: undefined,
  setData: undefined,
  setProgress: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

CreateGroup1.propTypes = {
  data: PropTypes.shape({ name: PropTypes.string, email: PropTypes.string }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default CreateGroup1;
