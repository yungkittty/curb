import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../../components/icon";
import Text from "../../../../../../components/text";
import TimepickerContainer from "./components/timepicker-container";
import TimepickerNumber from "./components/timepicker-number";

const EventTimepicker = ({ hours, minutes, onChangeHours, onChangeMinutes }) => {
  return (
    <TimepickerContainer style={{ fontSize: 12, fontWeight: "bold", color: "#4F4F4F" }}>
      <Icon size="extra-extra-small" icon="clock" color="#E0E0E0" style={{ marginRight: 14 }} />
      <TimepickerNumber
        type="number-pad"
        value={hours}
        onChange={text => onChangeHours(text.target.value)}
        maxLength={2}
      />
      <Text style={{ padding: 5, fontSize: 12, fontWeight: "bold" }}>:</Text>
      <TimepickerNumber
        type="number-pad"
        value={minutes}
        onChange={text => onChangeMinutes(text.target.value)}
        maxLength={2}
      />
    </TimepickerContainer>
  );
};

EventTimepicker.propTypes = {
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
  onChangeHours: PropTypes.func.isRequired,
  onChangeMinutes: PropTypes.func.isRequired
};

export default EventTimepicker;
//      <TimepickerNumber type="number-pad" defaultValue={time.getMinutes()} />
