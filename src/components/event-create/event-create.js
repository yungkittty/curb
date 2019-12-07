import React from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
import EventDatepicker from "./components/event-datepicker";

class EventCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      selectedDate: undefined
    };

    this.handleOnTitleChange = this.handleOnTitleChange.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
  }

  getData() {
    const { title, selectedDate } = this.state;
    return { date: selectedDate.toUTCString(), name: title };
    //return JSON.stringify({ date: selectedDate.toUTCString(), name: title });
  }

  handleOnTitleChange(value) {
    const { selectedDate } = this.state;
    const { onModuleIsValid } = this.props;

    onModuleIsValid({ isValid: value !== "" && selectedDate });
    this.setState({ title: value });
  }

  handleSelectDate(date) {
    const { title } = this.state;
    const { onModuleIsValid } = this.props;

    onModuleIsValid({ isValid: date && title !== "" });
    this.setState({ selectedDate: date });
  }

  render() {
    const { groupThemeColor } = this.props;
    const { title, selectedDate } = this.state;

    return (
      <EventContainer>
        <EventHeader color={groupThemeColor} value={title} onChange={this.handleOnTitleChange} />
        <EventDatepicker
          color={groupThemeColor}
          selectedDate={selectedDate}
          onSelectDate={this.handleSelectDate}
        />
      </EventContainer>
    );
  }
}

EventCreate.propTypes = {
  onModuleIsValid: PropTypes.func.isRequired,
  groupThemeColor: PropTypes.string.isRequired
};

export default EventCreate;
