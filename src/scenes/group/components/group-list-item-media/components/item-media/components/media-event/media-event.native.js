import _ from "lodash";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Container from "../../../../../../../../components/container";
import Text from "../../../../../../../../components/text";
import Stadium from "../../../../../../../../components/stadium";
import Button from "../../../../../../../../components/button";
import EventContainer from "./components/event-container";
import EventTitleContainer from "./components/event-title-container";
import EventContentContainer from "./components/event-content-container";
import EventInfo from "./components/event-info";

const MediaEvent = ({ t, eventTitle, eventDate, userList, groupTheme }) => {
  const [remainingTime, setRemainingTime] = useState("");
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

  useEffect(() => {
    const offset = new Date(eventDate - new Date());

    if (offset.getFullYear() < 1970) setRemainingTime(t("pastEvent"));
    else if (offset.getFullYear() > 1970) setRemainingTime(t("futureEvent"));
    else if (offset.getMonth() > 0)
      setRemainingTime(
        t("left", {
          remaining: `${t(offset.getMonth() > 1 ? "month_plural" : "month", { count: offset.getMonth() })}`
        })
      );
    else if (offset.getDate() > 1)
      setRemainingTime(
        t("left", {
          remaining: `${t(offset.getDate() > 1 ? "day_plural" : "day", { count: offset.getDate() })}`
        })
      );
    else
      setRemainingTime(
        t("left", {
          remaining: `${offset.getHours() &&
            t(offset.getHours() > 1 ? "hour_plural" : "hour", { count: offset.getHours() })} ${t("and")} ${t(
            offset.getMinutes() > 1 ? "minute_plural" : "minute",
            { count: offset.getMinutes() }
          )}`
        })
      );
  }, []);

  const beautyTime = value => {
    if (value < 10) return `0${value}`;
    return value;
  };

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

  // si l'event est passe afficher Evenement passe
  // si dans plus de 1 an marquer dans plus de 1 an
  // si dans 1 mois ou plus marquer le nombre de mois
  // si dans 1 jour ou plus marquer le nombre de jours
  // sinon marquer heures et minutes restantes

  return (
    <EventContainer>
      <EventTitleContainer>
        <Text type="h1" weight={700} style={{ color: groupTheme }}>
          {eventTitle}
        </Text>
      </EventTitleContainer>
      <EventContentContainer groupTheme={groupTheme}>
        <Text type="h3" weight={700} style={{ color: "white" }}>
          {remainingTime}
        </Text>
        <Container />
        <Stadium as={Button} backgroundColor="white" radius="extra-small" onClick={() => onClick()}>
          <Text type="h4" weight={700} style={{ color: groupTheme }}>
            {t("join")}
          </Text>
        </Stadium>
        <EventInfo icon="user-friends" text={`${userList.length}`} />
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
      </EventContentContainer>
    </EventContainer>
  );
};

MediaEvent.propTypes = {
  t: PropTypes.func.isRequired,
  eventTitle: PropTypes.string.isRequired,
  eventDate: PropTypes.instanceOf(Date).isRequired,
  userList: PropTypes.arrayOf(PropTypes.string).isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default _.flowRight([withTranslation("common")])(MediaEvent);
