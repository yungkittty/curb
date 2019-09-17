import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import MediaItemContainer from "./components/media-item-container";
import MediaGroupPreview from "./components/media-group-preview";
import MediaPlaceholder from "./components/media-placeholder";
import ListFlat from "../../../../../list-flat";
import mediaRandomSlider from "./utils/media-random-slider";

class ContentMedia extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isDragging: false };

    this.listFlatRef = React.createRef();

    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.getItemLayout = this.getItemLayout.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.startTimer = this.startTimer.bind(this);

    this.setTimeoutFunc = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedIndex } = this.props;
    const { isDragging } = this.state;
    if (!prevState.isDragging && prevState.isDragging !== isDragging) clearTimeout(this.setTimeoutFunc);
    if (selectedIndex !== prevProps.selectedIndex) this.startTimer();
  }

  onViewableItemsChanged(value) {
    const { isDragging } = this.state;
    const { onIndexChange } = this.props;
    if (!isDragging && _.size(value.viewableItems) === 1) onIndexChange(value.viewableItems[0].index);
  }

  getItemLayout(item, itemIndex) {
    const { cardSize } = this.props;
    return {
      length: cardSize.width,
      offset: cardSize.width * itemIndex,
      index: itemIndex
    };
  }

  startTimer() {
    const { postType, onIndexChange } = this.props;
    if (postType) return;
    this.setTimeoutFunc = setTimeout(() => {
      const { mediaList, selectedIndex } = this.props;
      this.listFlatRef.current.scrollToIndex({
        index: _.size(mediaList) - 1 === selectedIndex ? 0 : selectedIndex + 1,
        viewOffset: 0
      });
      onIndexChange(_.size(mediaList) - 1 === selectedIndex ? 0 : selectedIndex + 1);
    }, mediaRandomSlider(15000, 25000));
  }

  renderItem({ item: { component } }) {
    const { cardSize } = this.props;
    return <MediaItemContainer cardSize={cardSize}>{component}</MediaItemContainer>;
  }

  render() {
    const { mediaList, cardSize, groupName, ...others } = this.props;
    const data = _.map(mediaList, (component, type) => ({ component, type }));
    // eslint-disable-next-line
    return mediaList ? (
      <ListFlat
        horizontal
        pagingEnabled
        ref={this.listFlatRef}
        onViewableItemsChanged={this.onViewableItemsChanged}
        onScrollBeginDrag={() => this.setState({ isDragging: true })}
        onScrollEndDrag={() => this.setState({ isDragging: false })}
        showsHorizontalScrollIndicator={false}
        isManuallyScrollable={false}
        data={data}
        keyExtractor={item => item.type}
        getItemLayout={this.getItemLayout}
        renderItem={this.renderItem}
      />
    ) : groupName ? (
      <MediaGroupPreview groupName={groupName} {...others} />
    ) : (
      <MediaPlaceholder />
    );
  }
}

ContentMedia.defaultProps = {
  mediaList: undefined,
  selectedIndex: undefined,
  groupId: undefined,
  groupName: undefined,
  mediaType: undefined,
  mediaData: undefined
};

ContentMedia.propTypes = {
  postType: PropTypes.bool.isRequired,
  onIndexChange: PropTypes.func.isRequired,
  mediaList: PropTypes.object, // eslint-disable-line
  selectedIndex: PropTypes.number,
  cardSize: PropTypes.shape({
    size: PropTypes.string,
    isCardExtended: PropTypes.bool,
    width: PropTypes.number,
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  groupId: PropTypes.string,
  groupName: PropTypes.string,
  mediaType: PropTypes.string,
  mediaData: PropTypes.string
};

export default ContentMedia;
