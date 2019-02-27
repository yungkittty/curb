import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/container";
import ListButtonIcon from "./components/list-button-icon";
import ListFlat from "../../../../components/list-flat";

class DiscoveryList extends React.Component {
  constructor(props) {
    super(props);
    this.listFlat = React.createRef();
    this.scrollToCurrentIndex = 0;
    this.scrollToOffset = 0;
    this.isScrollable = this.isScrollable.bind(this);
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.state = {
      isScrollableToLeft: false,
      isScrollableToRight: true
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.isScrollable);
    const { current: containerScroll } = this.listFlat.current.containerScroll;
    containerScroll.addEventListener("scroll", this.isScrollable);
    this.isScrollable();
  }

  componentDidUpdate(prevProps) {
    const { data: prevItemsData } = prevProps;
    const { data: itemsData } = this.props;
    if (prevItemsData !== itemsData) this.isScrollable();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.isScrollable);
    const { current: containerScroll } = this.listFlat.current.containerScroll;
    containerScroll.removeEventListener("scroll", this.isScrollable);
  }

  isScrollable() {
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = this.listFlat.current.containerScroll.current;
    this.setState({
      isScrollableToLeft: scrollLeft !== 0,
      isScrollableToRight: scrollWidth - scrollLeft > clientWidth
    });
  }

  scrollToLeft() {
    const { current: containerScroll } = this.listFlat.current.containerScroll;
    this.scrollToOffset = Math.floor(containerScroll.clientWidth / 140);
    this.scrollToCurrentIndex =
      Math.max(this.scrollToCurrentIndex - this.scrollToOffset, 0);
    const { current: listFlat } = this.listFlat;
    listFlat.scrollToIndex({ index: this.scrollToCurrentIndex });
  }

  scrollToRight() {
    const { current: containerScroll } = this.listFlat.current.containerScroll;
    this.scrollToOffset = Math.floor(containerScroll.clientWidth / 140);
    const { data: itemsData } = this.props;
    this.scrollToCurrentIndex = Math.min(
      this.scrollToCurrentIndex + this.scrollToOffset,
      itemsData.length - this.scrollToOffset);
    const { current: listFlat } = this.listFlat;
    listFlat.scrollToIndex({ index: this.scrollToCurrentIndex });
  }

  render() {
    const { isScrollableToLeft, isScrollableToRight } = this.state;
    return (
      <Container style={{ position: "relative" }}>
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
          style={{ height: 160 }}
          contentContainerStyle={{ paddingLeft: 40 }}
          getItemLayout={(itemData, itemIndex) => ({ offset: 140 * itemIndex })}
        />
        {isScrollableToRight ? (
          <ListButtonIcon
            icon="angle-right"
            style={{ right: 20 }}
            onClick={this.scrollToRight}
          />
        ) : null}
      </Container>
    );
  }
}

DiscoveryList.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.array.isRequired
};

export default DiscoveryList;
