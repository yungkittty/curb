import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/container";
import ImageUser from "../../../../components/image-user";
import Circle from "../../../../components/circle";
import Icon from "../../../../components/icon";

class HeaderUserImage extends React.Component {
  constructor(props) {
    super(props);
    this.getLowerSize = _.memoize(this.getLowerSize);
  }

  // eslint-disable-next-line
  getLowerSize(size) {
    const innerSizes = [
      // eslint-disable-line
      "extra-extra-extra-small",
      "extra-extra-small",
      "extra-small"
    ];
    switch (size) {
      case "small":
        return innerSizes[0];
      case "medium":
        return innerSizes[1];
      case "large":
        return innerSizes[2];
      default:
        return undefined;
    }
  }

  render() {
    const {
      // eslint-disable-line
      userId,
      groupCreatorId,
      groupGradientColors,
      theme,
      ...others
    } = this.props;
    const lowerSize = this.getLowerSize(others.size);
    return (
      <Container style={{ position: "relative" }}>
        <ImageUser
          // eslint-disable-line
          {...others}
          userId={userId}
        />
        {userId === groupCreatorId ? (
          <Circle
            // eslint-disable-line
            diameter={lowerSize}
            backgroundColor={groupGradientColors[1]}
            component={Icon}
            icon="crown"
            size={lowerSize}
            color="white"
            style={{
              position: "absolute",
              right: -3,
              bottom: -3,
              borderStyle: "solid",
              borderWidth: 3,
              borderColor: "white"
            }}
          />
        ) : null}
      </Container>
    );
  }
}

HeaderUserImage.propTypes = {
  userId: PropTypes.string.isRequired,
  groupCreatorId: PropTypes.string.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default HeaderUserImage;
