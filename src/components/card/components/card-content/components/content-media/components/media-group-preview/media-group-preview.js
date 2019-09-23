import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import PreviewContainer from "./components/preview-container";
import PreviewImage from "./components/preview-image";
import PreviewText from "./components/preview-text";
import Text from "../../../../../../../text";
import Stadium from "../../../../../../../stadium";
import { platformBools } from "../../../../../../../../configurations/platform";

class MediaGroupPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoaded: false };
  }

  render() {
    const { theme, groupName, cardSize, groupAvatar, groupTheme, groupCategory } = this.props;
    const { isLoaded } = this.state;
    return (
      <PreviewContainer
        style={{ backgroundColor: !groupAvatar && theme[`group${_.capitalize(groupTheme)}Color`] }}
        cardSize={cardSize}
      >
        {groupAvatar && (
          <PreviewImage
            src={_.replace(groupAvatar, "medium", "large")}
            objectFit="cover"
            onLoad={() => this.setState({ isLoaded: true })}
          />
        )}
        {groupAvatar && isLoaded && (
          <React.Fragment>
            <PreviewText type="h2" weight={700}>
              {groupName}
            </PreviewText>
            {groupTheme && (
              <Stadium
                // eslint-disable-line
                radius="extra-extra-small"
                scale="x2"
                backgroundColor="white"
                style={{ marginTop: platformBools.isWeb ? 10 : 8, zIndex: 1 }}
                component={Text}
                type="h5"
                weight={700}
                contentStyle={{
                  color: groupAvatar ? theme.fontColor : theme[`group${_.capitalize(groupTheme)}Color`]
                }}
              >
                {groupCategory}
              </Stadium>
            )}
          </React.Fragment>
        )}
      </PreviewContainer>
    );
  }
}

MediaGroupPreview.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  cardSize: PropTypes.shape({
    size: PropTypes.string,
    isCardExtended: PropTypes.bool,
    width: PropTypes.number,
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  groupCategory: PropTypes.string.isRequired
};

export default withTheme(MediaGroupPreview);
