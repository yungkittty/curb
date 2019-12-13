import React from "react";
import PropTypes from "prop-types";
import Container from "../container";
import Icon from "../icon";
import PollContainer from "./components/poll-container";
import ListFlat from "../list-flat";
import PollHeaderContainer from "./components/poll-header-container";
import PollHeaderTitle from "./components/poll-header-title";
import PollContentContainer from "./components/poll-content-container";
import PollOptions from "./components/poll-options";
import PollButton from "./components/poll-button";

class PollCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      question: "", 
      options: [] 
    };
    this.checkIsModuleValid = this.checkIsModuleValid.bind(this);
    this.handleOnQuestionChange = this.handleOnQuestionChange.bind(this);
    this.handleOnOptionChange = this.handleOnOptionChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  getData() {
    const { question, options } = this.state;
    console.log(options);
    return JSON.stringify({ question, options });
  }

  checkIsModuleValid() {
    const { question, options } = this.state;
    return question !== "";
  }

  handleOnQuestionChange({ target: { value } }) {
    const { onModuleIsValid } = this.props;
    onModuleIsValid({ isValid: this.checkIsModuleValid() });
    this.setState({ question: value });
  }

  handleOnOptionChange(optionIndex) {
    return ({  target: { value } }) => {
      const { onModuleIsValid } = this.props;
      const options = this.state.options
      options[optionIndex] = value; 
      this.setState({options: options});
    }
  }

  renderItem({index}) {
    const { groupThemeColor } = this.props;
    return <PollOptions onChange={this.handleOnOptionChange(index)} placeholder="Reponses" />;
  }

  render() {
    const { groupThemeColor, onModuleIsValid } = this.props;
    const { options } = this.state;
    return (
      <PollContainer>
        <PollHeaderContainer style={{ backgroundColor: groupThemeColor }}>
          <PollHeaderTitle onChange={this.handleOnQuestionChange} placeholder="Type your question" />
          {
            <Container
              style={{
                backgroundColor: "white",
                marginLeft: "auto",
                marginRight: "auto",
                height: 1,
                width: "70%"
              }}
            />
          }
        </PollHeaderContainer>
        <PollContentContainer style={{ backgroundColor: groupThemeColor }}>
          <ListFlat renderItem={this.renderItem} data={options} style={{ width: "100%" }} />
          <PollButton
            onClick={() => {
              onModuleIsValid({ isValid: true });
              this.setState(prevState => ({ options: [...prevState.options, ""] }));
            }}
          >
            <Icon icon="plus" color="white" />
          </PollButton>
        </PollContentContainer>
      </PollContainer>
    );
  }
}

PollCreate.propTypes = {
  onModuleIsValid: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default PollCreate;
