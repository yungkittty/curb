import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import PollContainer from "./components/poll-container";
import ListFlat from "../list-flat";
import PollHeaderContainer from "./components/poll-header-container";
import PollHeaderTitle from "./components/poll-header-title";
import PollContentContainer from "./components/poll-content-container";
import PollButton from "./components/poll-button";

class PollDisplay extends React.Component {
  constructor(props) {
    super(props);    
    this.renderItem = this.renderItem.bind(this);
  }

  getData() {
    const { question, options } = this.state;
    return JSON.stringify({ question, options });
  }

  renderItem() {
    const { theme } = this.props;
    return <PollButton>
              ok
          </PollButton>
    ;
  }

  render() {
    const { groupThemeColor, question, options } = this.props;
    return (
      <PollContainer>
        <PollHeaderContainer style={{ backgroundColor: groupThemeColor }}>
          <PollHeaderTitle type="h2" weight={700}>
            {question}
          </PollHeaderTitle>
        </PollHeaderContainer>
        <PollContentContainer style={{ backgroundColor: groupThemeColor }}>
          <ListFlat renderItem={this.renderItem} data={options} style={{ width: "100%" }} />
        </PollContentContainer>
      </PollContainer>
    );
  }
}

PollDisplay.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  t: PropTypes.func.isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default PollDisplay;
