import React from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
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

  getData() {
    const { title, selectedDate } = this.state;

    return { date: selectedDate, name: title };
  }

  render() {
    const { groupTheme } = this.props;
    const { title, selectedDate } = this.state;

    return (
      <EventContainer>
        <EventHeader color={groupTheme} value={title} onChange={value => this.setState({ title: value })} />
        <EventDatepicker
          color={groupTheme}
          selectedDate={selectedDate}
          onSelectDate={date => this.setState({ selectedDate: date })}
        />
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
