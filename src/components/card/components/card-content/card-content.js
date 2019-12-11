import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ContentMedia from "./components/content-media";
import ContentMediaList from "./components/content-media-list";
import ContentMenu from "./components/content-menu";
import ContentDropdown from "./components/content-dropdown";

class CardContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedIndex: 0, isContentMenuShowed: false };
  }

  componentDidUpdate(prevProps) {
    const { mediaList } = this.props;
    const { selectedIndex } = this.state;
    if (!mediaList) return;
    if (selectedIndex >= _.size(mediaList) || _.size(mediaList) > _.size(prevProps.mediaList))
      this.setState({ selectedIndex: _.size(mediaList) - 1 }); // eslint-disable-line
  }

  render() {
    const { mediaList, contentMenuButton, ...others } = this.props;
    const { selectedIndex, isContentMenuShowed } = this.state;
    return (
      <React.Fragment>
        <ContentMedia
          mediaList={mediaList}
          selectedIndex={selectedIndex}
          onIndexChange={index => this.setState({ selectedIndex: index })}
          {...others}
        />
        {_.size(mediaList) > 0 && (
          <ContentMediaList
            mediaList={mediaList}
            selectedIndex={selectedIndex}
            onClick={index => this.setState({ selectedIndex: index })}
          />
        )}
        {contentMenuButton && (
          <ContentMenu
            contentMenuButton={contentMenuButton}
            onMenuClick={() => this.setState({ isContentMenuShowed: true })}
            selectedMediaType={_.keys(mediaList)[selectedIndex]}
          />
        )}
        {isContentMenuShowed && (
          <ContentDropdown
            optionsList={contentMenuButton.optionsList}
            onClose={() => this.setState({ isContentMenuShowed: false })}
          />
        )}
      </React.Fragment>
    );
  }
}

CardContent.defaultProps = {
  contentMenuButton: undefined
};

CardContent.propTypes = {
  mediaList: PropTypes.object.isRequired, // eslint-disable-line
  contentMenuButton: PropTypes.shape({
    icon: PropTypes.string,
    onClick: PropTypes.func
  })
};

export default CardContent;
