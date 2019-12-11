import React from "react";
import PropTypes from "prop-types";
import Card from "./card";
import withMedia from "../../hocs/with-media";

const CardContainer = ({ mediaCreatorId, ...others }) => <Card userId={mediaCreatorId} {...others} />;

CardContainer.defaultProps = { mediaCreatorId: undefined };

CardContainer.propTypes = { mediaCreatorId: PropTypes.string };

export default withMedia(CardContainer);
