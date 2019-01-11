import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
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
      <ContentContainer>
        <ContentTitle>{t("createGroup:createGroup")}</ContentTitle>
        <SelectImage />
        <Input
          size="modal"
          id="groupName"
          placeholder={t("createGroup:groupName")}
          onChange={this.handleChange}
          value={value}
          error={error && t(`validation:groupName.${error}`)}
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
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({ name: PropTypes.object }),
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default withNamespaces()(CreateGroup1);
