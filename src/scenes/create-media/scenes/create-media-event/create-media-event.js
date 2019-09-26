import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/container";
import EventContainer from "./components/event-container";
import EventHeaderContainer from "./components/event-header-container";
import EventHeaderTitle from "./components/event-header-title";
import EventContentContainer from "./components/event-content-container";
import EventDatepicker from "./components/event-datepicker";
import EventTimepicker from "./components/event-timepicker";

class CreateMediaEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hours: String(new Date().getHours()), minutes: String(new Date().getMinutes()) };

    this.onChangeHours = this.onChangeHours.bind(this);
    this.onChangeMinutes = this.onChangeMinutes.bind(this);
  }

  onChangeHours(text) {
    const num = parseInt(text);

    if (!isNaN(num) && num >= 0 && num < 24) {
      this.setState({ hours: text });
    } else if (isNaN(num)) {
      this.setState({ hours: "" });
    }
  }

  onChangeMinutes(text) {
    const num = parseInt(text);

    if (!isNaN(num) && num >= 0 && num < 60) {
      this.setState({ minutes: text });
    } else if (isNaN(num)) {
      this.setState({ minutes: "" });
    }
  }

  render() {
    const { hours, minutes } = this.state;
    const { groupTheme } = this.props;
    return (
      <EventContainer>
        <EventHeaderContainer style={{ backgroundColor: groupTheme }}>
          <EventHeaderTitle placeholder="Name of the event" />
          <Container
            style={{
              backgroundColor: "white",
              marginLeft: "auto",
              marginRight: "auto",
              height: 1,
              width: "70%"
            }}
          />
        </EventHeaderContainer>
        <EventContentContainer>
          <EventDatepicker color={groupTheme} />
          <EventTimepicker
            hours={hours}
            minutes={minutes}
            onChangeHours={text => this.onChangeHours(text)}
            onChangeMinutes={text => this.onChangeMinutes(text)}
          />
        </EventContentContainer>
      </EventContainer>
    );
  }
}

CreateMediaEvent.propTypes = {
  t: PropTypes.func.isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default CreateMediaEvent;
