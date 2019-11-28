import React from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
import EventContentContainer from "./components/event-content-container";
import EventDatepicker from "./components/event-datepicker";

// {date: '', name: ''}

class CreateMediaEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      selectedDate: undefined
    };
  }

  render() {
    const { groupTheme } = this.props;
    const { title, selectedDate } = this.state;

    return (
      <EventContainer>
        <EventHeader color={groupTheme} value={title} onChange={value => this.setState({ title: value })} />
        <EventContentContainer>
          <EventDatepicker
            color={groupTheme}
            selectedDate={selectedDate}
            onSelectDate={date => this.setState({ selectedDate: date })}
          />
        </EventContentContainer>
      </EventContainer>
    );
  }
}

//delete default props
CreateMediaEvent.defaultProps = {
  groupTheme: "#56CCF2"
};

CreateMediaEvent.propTypes = {
  groupTheme: PropTypes.string
};

export default CreateMediaEvent;
