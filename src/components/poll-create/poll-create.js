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
    this.handleOnOptionChange = this.handleOnQuestionChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  getData() {
    const { question, options } = this.state;
    console.log(options);
    return JSON.stringify({ question, options });
  }

  checkIsModuleValid() {
    const { question, options } = this.state;
    return question !== "" && options.length !== 0;
  }

  handleOnQuestionChange({ target: { value } }) {
    console.log(value)
    const { onModuleIsValid } = this.props;
    onModuleIsValid({ isValid: this.checkIsModuleValid() });
    //this.setState({ question: value });
  }

  handleOnChangeOption(optionIndex) {
    return ({  target: { value } }) => {
      const { onModuleIsValid } = this.props;
      onModuleIsValid({ isValid: this.checkIsModuleValid() });
      const blabla = this.state.options
      blabla[optionIndex] = value; 
      this.setState({options: blabla});
    }
  }

  renderItem({index}) {
    const { groupThemeColor } = this.props;
    console.log(index);
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
