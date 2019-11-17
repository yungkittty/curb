import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
import EventContentContainer from "./components/event-content-container";
import EventDatepicker from "./components/event-datepicker";
import EventTimepicker from "./components/event-timepicker";

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

  const onSubmitEvent = () => {
    console.log(eventHeaderTitleRef.current.value);
    console.log(eventDatepickerRef.current.value);
  };

  //get child state component on validate post
  return (
    <EventContainer>
      <EventHeader color={groupTheme} ref={eventHeaderTitleRef} />
      <EventContentContainer>
        <EventDatepicker color={groupTheme} ref={eventDatepickerRef} />
        <EventTimepicker
          hours={hours}
          minutes={minutes}
          onChangeHours={text => onChange(setHours, 24, text)}
          onChangeMinutes={text => onChange(setMinutes, 60, text)}
        />
      </EventContentContainer>
      <button onClick={onSubmitEvent}>Console.log data</button>
    </EventContainer>
  );
};

//delete default props
CreateMediaEvent.defaultProps = {
  groupTheme: "#56CCF2"
};

CreateMediaEvent.propTypes = {
  t: PropTypes.func.isRequired,
  groupTheme: PropTypes.string
};

export default CreateMediaEvent;
