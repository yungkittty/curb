import _ from "lodash";
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

class PollDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = { question: "", options: [] };
    
    this.renderItem = this.renderItem.bind(this);
  }

  getData() {
    const { question, options } = this.state;
    return JSON.stringify({ question, options });
  }

  renderItem() {
    const { theme } = this.props;
    return <PollOptions placeholder="Reponses" />;
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

PollDisplay.propTypes = {
  t: PropTypes.func.isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default PollDisplay;
