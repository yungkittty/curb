import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Container from "../../../../../../../../../../../../components/container";
import EventInfo from "../event-info";

const ContentEventInfo = ({ t, eventDate }) => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const ordinalIndicatorProcessor = Number => {
    switch (Number) {
      case 1:
        return "ordinalIndicatorFirst";
      case 2:
        return "ordinalIndicatorSecond";
      case 3:
        return "ordinalIndicatorThird";
      default:
        return "ordinalIndicatorOthers";
    }
  };

  const beautyTime = value => {
    if (value < 10) return `0${value}`;
    return value;
  };

  return (
    <Container>
      <EventInfo
        icon="calendar-day"
        text={t("date", {
          day: t(days[eventDate.getDay()]),
          month: t(months[eventDate.getMonth()]),
          date: eventDate.getDate(),
          ordinalIndicator: t(ordinalIndicatorProcessor(eventDate.getDate()))
        })}
      />
      <EventInfo
        icon="clock"
        text={`${beautyTime(eventDate.getHours())} : ${beautyTime(eventDate.getMinutes())}`}
      />
    </Container>
  );
};

ContentEventInfo.propTypes = {
  t: PropTypes.func.isRequired,
  eventDate: PropTypes.instanceOf(Date).isRequired
};

export default _.flowRight([withTranslation("common")])(ContentEventInfo);
