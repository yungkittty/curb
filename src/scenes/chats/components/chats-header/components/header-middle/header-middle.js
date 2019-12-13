import React from "react";
import PropTypes from "prop-types";
import MiddleTitle from "./components/middle-title";
import { platformBools } from "../../../../../../configurations/platform";

const HeaderMiddle = ({ groupId, groupName }) =>
  platformBools.isNative || groupId ? (
    <MiddleTitle type="h3" weight={700} groupId={groupId}>
      {/* eslint-disable-line */}
      {groupId ? groupName : "Chats"}
    </MiddleTitle>
  ) : null;

HeaderMiddle.propTypes = {
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired
};

export default HeaderMiddle;
