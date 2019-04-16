import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withTranslation } from "react-i18next";
import Container from "../../../../components/app-modal-scene-container"
import AppModalTitle from "../../../../components/app-modal-title";
import PostError from "../../components/post-error";
import Loader from "../../../../components/loader";
import PostSelect from "../post-select";
import Text from "../../../../components/text";
import InputForm from "../../../../components/input-form";
/* eslint-disable-next-line */

class PostText extends Component {
  
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = this.props;

    this.state = { isLoading: false };

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 2, headerSteps: 2 });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: PostSelect, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("common:next"),
      footerOnClick: this.submit
    });
  }

  submit() {
    const { isLoading } = this.state;
    if (!this.checkForm() || isLoading) return;

    const {
      postGroup,
      history,
      currentUserId,
      groupName,
      discoverability,
      modules,
      theme
    } = this.props;
    postGroup({
      history,
      creatorId: currentUserId,
      name: groupName.value,
      status: discoverability.value,
      mediaTypes: modules.value,
      theme: theme.value
    });

    this.setState({ isLoading: true });

    const {
      setAppModalHeaderLeftButton,
      setAppModalHeaderRightButton
    } = this.props;
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () => undefined
    });
    setAppModalHeaderRightButton({
      headerRightIcon: "times",
      headerRightOnClick: () => undefined
    });
  }

  checkForm() {
    const {
      theme: { value }
    } = this.props;
    return this.checkInput("theme", value);
  }

  checkInput(id, value) {
    const error = value === undefined ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      theme: { value }
    } = this.props;
    const newValue = clickValue === value ? undefined : clickValue;
    this.checkInput("theme", newValue);
  }

  render() {
    const {
      t,
      theme: { value, error }
    } = this.props;
    const { isLoading } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <Container>
        <AppModalTitle>Post</AppModalTitle>
        <InputForm />
      </Container>
    );
  }
}

PostText.defaultProps = {
  groupName: { value: "", error: undefined },
  discoverability: { value: undefined, error: undefined },
  modules: { value: [], error: undefined },
  theme: { value: "", error: undefined }
};

PostText.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalHeaderRightButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  postGroup: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  /* eslint-disable-next-line */
  history: PropTypes.object.isRequired,
  groupName: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  discoverability: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  modules: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    error: PropTypes.string
  }),
  theme: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withRouter(withTranslation("createGroup")(PostText));
