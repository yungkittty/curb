import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/container";
import Icon from "../../../../components/icon";
import PollContainer from "./components/poll-container";
import ListFlat from "../../../../components/list-flat";
import PollHeaderContainer from "./components/poll-header-container";
import PollHeaderTitle from "./components/poll-header-title";
import PollContentContainer from "./components/poll-content-container";
import PollOptions from "./components/poll-options";
import PollButton from "./components/poll-button";

class CreateMediaPoll extends React.Component {
  constructor(props) {
    super(props);

    this.state = { options: [] };
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem() {
    const { theme } = this.props;
    return (
      <PollOptions placeholder="Reponses" />
    )
  }

  render() {
    const { groupTheme } = this.props;
    const { options } = this.state;
    return (
      <PollContainer>
        <PollHeaderContainer style={{ backgroundColor: groupTheme }}>
          <PollHeaderTitle placeholder="Type your question" />
          {<Container
            style={{
              backgroundColor: "white",
              marginLeft: "auto",
              marginRight: "auto",
              height: 1,
              width: "70%"
            }}
          />}
        </PollHeaderContainer>
        <PollContentContainer>
          <ListFlat
            renderItem={this.renderItem}
            data= { options }
            style = {{width: "100%"}}
          />
          <PollButton onClick={()=> this.setState(prevState=>({options: [...prevState.options, ""]} ))}> 
            <Icon icon="plus"/>
          </PollButton>
        </PollContentContainer>
      </PollContainer>
    );
  }
}

CreateMediaPoll.propTypes = {
  t: PropTypes.func.isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default CreateMediaPoll;