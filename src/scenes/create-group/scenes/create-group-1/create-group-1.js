import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import CreateGroup2 from "../create-group-2";
import CreateGroup1Container from "./components/create-group-1-container";
import CreateGroup1Title from "./components/create-group-1-title";
import SelectImage from "./components/select-image";
import Input from "../../../../components/input";

class CreateGroup1 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      data: {
        groupName = {
          value: "",
          error: undefined
        }
      },
      setProgress,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      groupName
    };

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 1, total: 4 });
    setButtonTitle(t("common:next"));
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    const { setComponent } = this.props;

    if (this.checkForm()) setComponent(CreateGroup2, 1);
  }

  checkForm() {
    const {
      groupName: { value }
    } = this.state;

    return this.checkInput("groupName", value);
  }

  checkInput(id, value) {
    const { setData } = this.props;

    const error = value.length === 0 ? "missing" : undefined;

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

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { t } = this.props;
    const {
      groupName: { value, error }
    } = this.state;

    return (
      <CreateGroup1Container>
        <CreateGroup1Title>{t("createGroup")}</CreateGroup1Title>
        <SelectImage />
        <Input
          size="modal"
          id="groupName"
          placeholder={t("groupName")}
          onChange={this.handleChange}
          value={value}
          error={error && t(`validation:groupName.${error}`)}
        />
      </CreateGroup1Container>
    );
  }
}

CreateGroup1.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({ name: PropTypes.object }).isRequired,
  setData: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.func.isRequired,
  setButtonClick: PropTypes.func.isRequired
};

export default withNamespaces("createGroup")(CreateGroup1);
