import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withUser from "../../../../hocs/with-user";
import withAppModal from "../../../../hocs/with-user";
import TextInput from "./components/text-input";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import CreateMedia from "../../../create-media";


class CreateMediaText extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingProgress: undefined };
    const { 
      setAppModalHeaderText, 
      setAppModalFooterButton, 
      setAppModalHeaderLeftButton,
      setAppModalScene
     } = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.onUploadProgress = this.onUploadProgress.bind(this);
    this.checkForm = this.checkForm.bind(this);
    
    setAppModalHeaderText({ text: "Post content" });
    setAppModalFooterButton({ text: "Send", onClick: this.submit });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: CreateMedia, direction: -1 })
    });
  }

  componentDidUpdate(prevProps) {
    const { enableAppModalButtons, isFetchingMedias } = this.props;
    if (prevProps.isFetchingMedias && !isFetchingMedias) {
      // eslint-disable-next-line
      this.setState({ loadingProgress: undefined });
      enableAppModalButtons();
    }
  }

  onUploadProgress({ loaded, total }) {
    this.setState({ loadingProgress: loaded / total });
  }

  checkForm() {
    const {
      text: {
        value: { data }
      }
    } = this.props;
    return data !== undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({[id]: { ...Y, value } });
  }

  submit() {
    const {
      postGroupTextContent,
      groupId,
      currentUserId: userId,
      text: {
        value: { data }
      }
    } = this.props;
    postGroupTextContent({
      groupId,
      userId,
      value: data,
      onUploadProgress: this.onUploadProgress
    });
    this.onUploadProgress({ loaded: 0.1, total: 100 });
  }

  render() {
    const { loadingProgress } = this.state;
    const { t, text } = this.props;

    return (
      <AppModalSceneContainer>
        <TextInput 
          multiline
          id="text"
          placeholder="Type your post here" 
          onChange={this.handleChange}
          value={text.value}
          loadingProgress={loadingProgress}
        />
      </AppModalSceneContainer>
    );
  }
}

CreateMediaText.defaultProps = {
  text: { value : "" }
};

CreateMediaText.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  groupMediaTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  /* text: PropTypes.shape({ value: PropTypes.shape({ data: PropTypes.string }) }), */
  text: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flow([withUser, withAppModal, withTranslation()])(CreateMediaText);