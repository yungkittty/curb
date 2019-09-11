import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ContentMedia from "./components/content-media";
import ContentMediaList from "./components/content-media-list";
import ContentMenu from "./components/content-menu";

class CardContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedIndex: 0 };
  }

  componentDidUpdate(prevProps) {
    const { mediaList } = this.props;
    const { selectedIndex } = this.state;
    if (selectedIndex >= _.size(mediaList) || _.size(mediaList) > _.size(prevProps.mediaList))
      this.setState({ selectedIndex: _.size(mediaList) - 1 }); // eslint-disable-line
  }

  render() {
    const { mediaList, dropdownMenu, ...others } = this.props;
    const { selectedIndex } = this.state;
    return (
      <React.Fragment>
        <ContentMedia mediaList={mediaList} selectedIndex={selectedIndex} {...others} />
        {mediaList && (
          <ContentMediaList
            mediaList={mediaList}
            selectedIndex={selectedIndex}
            onClick={index => this.setState({ selectedIndex: index })}
          />
        )}
        {dropdownMenu && (
          <ContentMenu dropdownMenu={dropdownMenu} selectedMediaType={_.keys(mediaList)[selectedIndex]} />
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
    optionsList: PropTypes.arrayOf({
      text: PropTypes.string,
      icon: PropTypes.string,
      onClick: PropTypes.func
    })
  })
};

export default CardContent;
