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
      data: {
        name: {
          value = "",
          error = false,
          errorMsg = "You must enter a group name"
        } = {}
      },
      setProgress,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      name: {
        value,
        error,
        errorMsg
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
    const {
      name: { value }
    } = this.state;

    return this.checkInput("name", value);
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

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const {
      name: { value, error, errorMsg }
    } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>Create group</ContentTitle>
        <SelectImage />
        <Input
          size="modal"
          id="name"
          placeholder="Group name"
          onChange={this.handleChange}
          value={value}
          error={error ? errorMsg : null}
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
  data: PropTypes.shape({ name: PropTypes.object }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default CreateGroup1;
