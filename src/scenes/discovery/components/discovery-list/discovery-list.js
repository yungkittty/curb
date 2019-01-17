import React from "react";
import PropTypes from "prop-types";
import ListContainer from "./components/list-container";
import ListButtonIcon from "./components/list-button-icon";
import ListFlat from "../../../../components/list-flat";

class DiscoveryList extends React.Component {
  constructor(props) {
    super(props);
    this.listFlat = React.createRef();
    this.scrollToCurrentIndex = 0;
    this.isScrollable = this.isScrollable.bind(this);
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.state = {
      isScrollableToLeft: false,
      isScrollableToRight: true,
      scrollToOffset: 0
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.isScrollable);
    const { current: containerScroll } = this.listFlat.current.containerScroll;
    containerScroll.addEventListener("scroll", this.isScrollable);
    this.setState({ scrollToOffset: Math.floor(containerScroll.clientWidth / 140) });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.isScrollable);
    const { current: containerScroll } = this.listFlat.current.containerScroll;
    containerScroll.removeEventListener("scroll", this.isScrollable);
  }

  isScrollable(event) {
    const {
      current: containerScroll,
      current: { scrollWidth, scrollLeft, clientWidth }
    } = this.listFlat.current.containerScroll;
    if (event.type === "resize")
      this.scrollToCurrentIndex = Math.floor(scrollLeft / 140);
    this.setState({
      isScrollableToLeft: scrollLeft !== 0,
      isScrollableToRight: scrollWidth - scrollLeft >= clientWidth + 40,
      ...(event.type === "resize"
        ? { scrollToOffset: Math.floor(containerScroll.clientWidth / 140) }
        : {})
    });
  }

  scrollToLeft() {
    const {
      current: listFlat,
      current: { containerScroll: { current: containerScroll } }
    } = this.listFlat;
    const scrollToOffset = Math.floor(containerScroll.clientWidth / 140);
    this.scrollToCurrentIndex = Math.max(this.scrollToCurrentIndex - scrollToOffset, 0);
    listFlat.scrollToIndex({ index: this.scrollToCurrentIndex });
    this.setState({ scrollToOffset });
  }

  scrollToRight() {
    const {
      current: listFlat,
      current: { containerScroll: { current: containerScroll } }
    } = this.listFlat;
    const scrollToOffset = Math.floor(containerScroll.clientWidth / 140);
    this.scrollToCurrentIndex = Math.min(
      this.scrollToCurrentIndex + scrollToOffset,
      // eslint-disable-next-line
      this.props.data.length - scrollToOffset);
    listFlat.scrollToIndex({ index: this.scrollToCurrentIndex });
    this.setState({ scrollToOffset });
  }

  render() {
    const {
      isScrollableToLeft,
      isScrollableToRight,
      // scrollToOffset // !
    } = this.state;
    return (
      <ListContainer>
        {isScrollableToLeft ? (
          <ListButtonIcon
            icon="angle-left"
            style={{ left: 20 }}
            onClick={this.scrollToLeft}
          />
        ) : null}
        <ListFlat
          {...this.props}
          ref={this.listFlat}
          contentContainerStyle={{ paddingLeft: 40 }}
          getItemLayout={(itemData, itemIndex) => ({ offset: 140 * itemIndex })}
        />
        {isScrollableToRight ? (
          <ListButtonIcon
            icon="angle-right"
            // style={{ left: 200 + 140 * (scrollToOffset - 1) }}
            style={{ right: 20 }}
            onClick={this.scrollToRight}
          />
        ) : null}
      </ListContainer>
    );
  }
}

DiscoveryList.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.array.isRequired
};

export default DiscoveryList;
