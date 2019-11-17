import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Container from "../../../../../../../../components/container";
import Text from "../../../../../../../../components/text";
import Button from "../../../../../../../../components/button";
import Icon from "../../../../../../../../components/icon";

const MediaEvent = ({ t, eventTitle, eventDate, userList, groupTheme }) => {
  const remaining = Math.round(Math.abs(eventDate - new Date()) / 8640000);
  return (
    <Container style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 110,
          width: "100%",
          backgroundColor: "white"
        }}
      >
        <Text type="h1" weight={700} style={{ color: groupTheme }}>
          {eventTitle}
        </Text>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: groupTheme
        }}
      >
        <Text type="h2" weight={700} style={{ color: "white" }}>
          {Math.round(Math.abs(eventDate - new Date()) / 8640000)} dqys left
        </Text>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignitems: "center",
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <Button style={{ height: 30, width: 115, borderRadius: 15, backgroundColor: "white" }}>
            <Text type="h5" weight={700} style={{ color: groupTheme }}>
              Join
            </Text>
          </Button>
          <Container
            style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 8 }}
          >
            <Icon icon="user-friends" size="extra-extra-small" color="white" style={{ marginRight: 6 }} />
            <Text style={{ color: "white" }}>{userList.length}</Text>
          </Container>
        </Container>
        <Container>
          <Container style={{ display: "flex", alignItems: "center", margin: 8 }}>
            <Icon icon="calendar-day" size="extra-extra-small" color="white" style={{ marginRight: 12 }} />
            <Text size="h5" weight={700} style={{ color: "white" }}>
              Day, Month NumberTh
            </Text>
          </Container>
          <Container style={{ display: "flex", alignItems: "center", margin: 8 }}>
            <Icon icon="clock" size="extra-extra-small" color="white" style={{ marginRight: 12 }} />
            <Text size="h5" weight={700} style={{ color: "white" }}>
              {eventDate.getHours()} : {eventDate.getMinutes()}
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

MediaEvent.propTypes = {
  t: PropTypes.func.isRequired,
  eventTitle: PropTypes.string.isRequired,
  eventDate: PropTypes.instanceOf(Date).isRequired,
  userList: PropTypes.arrayOf(PropTypes.instanceOf(String)).isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default _.flowRight([withTranslation("common")])(MediaEvent);
