import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import DatepickerContainer from "./components/datepicker-container";
import DatepickerMonth from "./components/datepicker-month";
import DatepickerDayLabel from "./components/datepicker-day-label";
import DatepickerDay from "./components/datepicker-day";

class EventDatepicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentDate: new Date(), dayList: undefined, selectedDate: undefined };

    this.initDatepickerDay = this.initDatepickerDay.bind(this);
    this.onPrevMonth = this.onPrevMonth.bind(this);
    this.onNextMonth = this.onNextMonth.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    const { currentDate } = this.state;
    this.setState({ dayList: this.initDatepickerDay(currentDate) });
  }

  onPrevMonth() {
    const { currentDate } = this.state;
    const tmpDate = currentDate;
    tmpDate.setMonth(currentDate.getMonth() - 1);
    tmpDate.setDate(1);
    this.setState({ currentDate: tmpDate, dayList: this.initDatepickerDay(tmpDate) });
  }

  onNextMonth() {
    const { currentDate } = this.state;
    const tmpDate = currentDate;
    tmpDate.setMonth(currentDate.getMonth() + 1);
    tmpDate.setDate(1);
    this.setState({ currentDate: tmpDate, dayList: this.initDatepickerDay(tmpDate) });
  }

  onSelect(e) {
    this.setState({ selectedDate: e });
  }

  // eslint-disable-next-line class-methods-use-this
  initDatepickerDay(currentDate) {
    let tmpDate = new Date(currentDate);
    const tmpList = [];

    while (tmpDate.getMonth() === currentDate.getMonth()) {
      tmpDate.setDate(tmpDate.getDate() - 1);
      tmpList.unshift(new Date(tmpDate));
    }
    while (tmpDate.getDay() !== 1) {
      tmpDate.setDate(tmpDate.getDate() - 1);
      tmpList.unshift(new Date(tmpDate));
    }
    tmpDate = new Date(currentDate);
    while (tmpList.length < 42) {
      tmpList.push(new Date(tmpDate));
      tmpDate.setDate(tmpDate.getDate() + 1);
    }
    return tmpList;
  }

  render() {
    const { currentDate, dayList, selectedDate } = this.state;
    const { color } = this.props;
    return (
      <DatepickerContainer>
        <DatepickerMonth
          onPrevMonth={this.onPrevMonth}
          onNextMonth={this.onNextMonth}
          currentDate={currentDate}
          color={color}
        />
        <DatepickerDayLabel color={color} />
        <DatepickerDay
          dayList={dayList}
          currentMonth={currentDate}
          selectedDate={selectedDate}
          onSelect={e => this.onSelect(e)}
          color={color}
          today={new Date()}
        />
      </DatepickerContainer>
    );
  }
}

EventDatepicker.propTypes = {
  color: PropTypes.string.isRequired
};

export default EventDatepicker;
