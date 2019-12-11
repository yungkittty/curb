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
    const { mediaList, isPost } = this.props;
    if (_.size(mediaList) <= 1 || isPost) return;
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    const { mediaList, isPost, selectedIndex } = this.props;
    const { isDragging } = this.state;
    if (_.size(mediaList) <= 1) return;
    if (!prevState.isDragging && isDragging) clearTimeout(this.setTimeoutFunc);
    if (selectedIndex !== prevProps.selectedIndex) {
      setTimeout(() => this.listFlatRef.current.scrollToIndex({ index: selectedIndex, viewOffset: 0 }));
      if (_.size(mediaList) <= 1 || isPost) return;
      this.startTimer();
    }
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
    const { mediaList, selectedIndex, onIndexChange } = this.props;
    clearTimeout(this.setTimeoutFunc);
    this.setTimeoutFunc = setTimeout(
      () => onIndexChange(_.size(mediaList) - 1 === selectedIndex ? 0 : selectedIndex + 1),
      mediaRandomSlider(15000, 30000)
    );
  }

  renderItem({ item: { component }, index }) {
    const { selectedIndex, cardSize, moduleComponentProps } = this.props;
    return (
      <MediaItemContainer cardSize={cardSize}>
        {React.cloneElement(component, { isShowedInCard: index === selectedIndex, ...moduleComponentProps })}
      </MediaItemContainer>
    );
  }

  render() {
    const { mediaList, cardSize, groupName, ...others } = this.props;
    const data = _.map(mediaList, (mediaData, type) => ({ component: mediaData.component, type }));
    // eslint-disable-next-line
    return _.size(mediaList) > 0 ? (
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
      <MediaGroupPreview groupName={groupName} cardSize={cardSize} {...others} />
    ) : (
      <MediaPlaceholder contentHeight={cardSize.contentHeight} />
    );
  }
}

ContentMedia.defaultProps = {
  mediaList: undefined,
  selectedIndex: undefined,
  groupId: undefined,
  groupName: undefined,
  mediaType: undefined,
  mediaData: undefined,
  moduleComponentProps: undefined
};

ContentMedia.propTypes = {
  onIndexChange: PropTypes.func.isRequired,
  mediaList: PropTypes.object, // eslint-disable-line
  isPost: PropTypes.bool.isRequired,
  selectedIndex: PropTypes.number,
  cardSize: PropTypes.shape({
    isSmall: PropTypes.bool,
    isCardExtended: PropTypes.bool,
    width: PropTypes.number,
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  groupId: PropTypes.string,
  groupName: PropTypes.string,
  mediaType: PropTypes.string,
  mediaData: PropTypes.string,
  moduleComponentProps: PropTypes.object // eslint-disable-line
};

export default ContentMedia;
