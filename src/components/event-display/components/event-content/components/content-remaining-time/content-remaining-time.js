import _ from "lodash";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Text from "../../../../../text";

const ContentRemainingTime = ({ t, eventDate }) => {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const offset = new Date(eventDate - new Date());

    offset.setHours(offset.getHours() - 1);
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
            t(offset.getHours() > 1 ? "hour_plural" : "hour", { count: offset.getHours() })} ${t(
            "and"
          )} ${t(offset.getMinutes() > 1 ? "minute_plural" : "minute", { count: offset.getMinutes() })}`
        })
      );
  }, []);

  return (
    <Text type="h3" weight={700} style={{ color: "white" }}>
      {remainingTime}
    </Text>
  );
};
ContentRemainingTime.propTypes = {
  t: PropTypes.func.isRequired,
  eventDate: PropTypes.instanceOf(Date).isRequired
};

export default _.flowRight([withTranslation("common")])(ContentRemainingTime);
