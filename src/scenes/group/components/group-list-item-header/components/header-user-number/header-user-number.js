import React from "react";
import PropTypes from "prop-types";
import Stadium from "../../../../../../components/stadium";
import Text from "../../../../../../components/text";
import Icon from "../../../../../../components/icon";
import shortNumberFormatter from "../../../../../../utils/short-number-formatter";
import { platformBools } from "../../../../../../configurations/platform";

const HeaderUserNumber = ({
  // eslint-disable-line
  groupUsersIdNumber,
  stadiumContentColor
}) => (
  <Stadium
    // eslint-disable-line
    radius="extra-extra-small"
    scale="x1"
    backgroundColor="white"
    style={{ marginLeft: 10 }}
    contentStyle={{ color: stadiumContentColor, alignItems: "center", display: "flex" }}
  >
    <Text type="h5" weight={700} style={{ color: stadiumContentColor }}>
      {shortNumberFormatter(groupUsersIdNumber)}
    </Text>
    <Icon
      icon="users"
      color={stadiumContentColor}
      size="extra-extra-small"
      style={{ marginLeft: platformBools.isWeb ? 6 : 3 }}
    />
  </Stadium>
);

HeaderUserNumber.propTypes = {
  groupUsersIdNumber: PropTypes.number.isRequired,
  stadiumContentColor: PropTypes.string.isRequired
};

export default HeaderUserNumber;
