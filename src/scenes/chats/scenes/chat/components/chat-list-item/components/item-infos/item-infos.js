import _ from "lodash";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import InfosContainer from "./components/infos-container";
import ImageUser from "../../../../../../../../components/image-user";
import Button from "../../../../../../../../components/button";
import Text from "../../../../../../../../components/text";
import withUser from "../../../../../../../../hocs/with-user";
import { platformBools } from "../../../../../../../../configurations/platform";

const ItemInfos = ({
  // eslint-disable-line
  userId,
  userName,
  messageCreatedAt,
  inverted
}) => {
  const messageDate = useMemo(() => new Date(messageCreatedAt), [messageCreatedAt]);

  return (
    <InfosContainer inverted={inverted}>
      <ImageUser
        // eslint-disable-line
        as={Button}
        shouldFetch={false}
        userId={userId}
        size="extra-small"
        style={{ position: "absolute", [inverted ? "right" : "left"]: platformBools.isWeb ? -50 : -40 }}
        onClick={`/users/${userId}`}
      />
      <Text type="h5" weight={700} style={{ marginRight: 5 }}>
        {/* eslint-disable-line */}
        {userName}
      </Text>
      <Text type="h5">
        {/* eslint-disable-line */}
        {`${messageDate.getDay()}/${messageDate.getMonth()}/${messageDate.getFullYear()} - ${messageDate.getHours()}:${_.repeat("0", +(messageDate.getSeconds() < 10))}${messageDate.getSeconds()}`}
      </Text>
    </InfosContainer>
  );
};

ItemInfos.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  messageCreatedAt: PropTypes.object.isRequired, // eslint-disable-line
  inverted: PropTypes.bool.isRequired
};

export default withUser(ItemInfos);
