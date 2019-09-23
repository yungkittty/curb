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

    this.state = { selectedIndex: 0, isMenuShowed: false };
  }

  componentDidUpdate(prevProps) {
    const { mediaList } = this.props;
    const { selectedIndex } = this.state;
    if (_.size(mediaList) === 0) return;
    if (selectedIndex >= _.size(mediaList) || _.size(mediaList) > _.size(prevProps.mediaList))
      this.setState({ selectedIndex: _.size(mediaList) - 1 }); // eslint-disable-line
  }

  render() {
    const { mediaList, dropdownMenu, postType, ...others } = this.props;
    const { selectedIndex, isMenuShowed } = this.state;
    return (
      <React.Fragment>
        <ContentMedia
          mediaList={mediaList}
          selectedIndex={selectedIndex}
          onIndexChange={index => this.setState({ selectedIndex: index })}
          postType={postType}
          {...others}
        />
        {_.size(mediaList) > 0 && (
          <ContentMediaList
            mediaList={mediaList}
            selectedIndex={selectedIndex}
            onClick={index => this.setState({ selectedIndex: index })}
          />
        )}
        {dropdownMenu && (
          <ContentMenu
            dropdownMenu={dropdownMenu}
            onMenuClick={() => this.setState({ isMenuShowed: true })}
            selectedMediaType={_.keys(mediaList)[selectedIndex]}
          />
        )}
        {isMenuShowed && (
          <ContentDropdown
            optionsList={dropdownMenu.optionsList}
            onClose={() => this.setState({ isMenuShowed: false })}
          />
        )}
      </React.Fragment>
    );
  }
}

CardContent.defaultProps = {
  dropdownMenu: undefined
};

CardContent.propTypes = {
  mediaList: PropTypes.object.isRequired, // eslint-disable-line
  dropdownMenu: PropTypes.shape({
    icon: PropTypes.string,
    optionsList: PropTypes.array
  }),
  postType: PropTypes.bool.isRequired
};

export default CardContent;
