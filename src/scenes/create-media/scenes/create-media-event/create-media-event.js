import React from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
import EventContentContainer from "./components/event-content-container";
import EventDatepicker from "./components/event-datepicker";
import EventTimepicker from "./components/event-timepicker";
import initDatepickerDay from "./utils/init-datepicker-day";
import initTimepickerField from "./utils/init-timepicker-field";

// {date: '', name: ''}

class CreateMediaEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      currentDate: new Date(),
      selectedDate: undefined,
      dayList: initDatepickerDay(new Date()),
      hours: initTimepickerField(new Date().getHours(), 24),
      minutes: initTimepickerField(new Date().getMinutes(), 60)
    };

    this.titleInputRef = React.createRef();
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMonthChange(offset) {
    const { currentDate } = this.state;
    const tmpDate = new Date(currentDate);

    tmpDate.setMonth(currentDate.getMonth() + offset);
    tmpDate.setDate(1);
    this.setState({ currentDate: tmpDate, selectedDate: undefined, dayList: initDatepickerDay(tmpDate) });
  }

  handleSubmit() {
    const { selectedDate, hours, minutes } = this.state;
    const finalDate = selectedDate;

    finalDate.setHours(hours);
    finalDate.setMinutes(minutes);
    console.log(this.titleInputRef.current.value, finalDate);
  }

  render() {
    const { groupTheme } = this.props;
    const { name, currentDate, dayList, selectedDate, hours, minutes } = this.state;

    return (
      <EventContainer>
        <EventHeader color={groupTheme} ref={this.titleInputRef} />
        <EventContentContainer>
          <EventDatepicker
            color={groupTheme}
            onMonthChange={this.handleMonthChange}
            currentDate={currentDate}
            dayList={dayList}
            selectedDate={selectedDate}
            onSelectDate={date => this.setState({ selectedDate: date })}
          />
          <EventTimepicker
            hours={hours}
            minutes={minutes}
            onChangeHours={text => this.setState({ hours: initTimepickerField(text, 24, hours) })}
            onChangeMinutes={text => this.setState({ minutes: initTimepickerField(text, 60, minutes) })}
          />
        </EventContentContainer>
        <button onClick={this.handleSubmit}>Console.log data</button>
      </EventContainer>
    );
  }
}
/**
const CreateMediaEvent = ({ groupTheme }) => {
  const eventHeaderTitleRef = useRef(null);
  const eventDatepickerRef = useRef(null);
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  const onChange = (setField, limit, value) => {
    if ((!Number.isNaN(value) && value >= 0 && value < limit) || value === "") {
      setField(value);
    }
  };

  const getData = () => {
    console.log(eventHeaderTitleRef.current.value);
    console.log(eventDatepickerRef.current.value);
    return "coucou";
  };

  // get child state component on validate post
  // add 0 on minutes picker if minutes < 10
  return (
    
  );
};
*/
//delete default props
CreateMediaEvent.defaultProps = {
  groupTheme: "#56CCF2"
};

CreateMediaEvent.propTypes = {
  groupTheme: PropTypes.string
};

export default CreateMediaEvent;
