import React from "react";
import SectionContainer from "./components/section-container";
import SectionButton from "./components/section-button";
import ListFlat from "../../../../components/list-flat";

/* eslint-disable */

class DiscoverySection extends React.Component {
  constructor(props) {
    super(props);
    this.listFlat = React.createRef();

    // ...

    this.currentIndex = 0;
  }

  render() {
    return (
      <SectionContainer>
        <SectionButton
          icon="angle-left"
          onClick={() => {
            console.log(this.listFlat);
            this.currentIndex--;
            this.listFlat.current.scrollToIndex({ index: this.currentIndex, viewOffset: 0 });
          }}
        />
        <ListFlat
          {...this.props}
          ref={this.listFlat}
          getItemLayout={(data, index) => ({ lenght: 130, offset: index * 130, index })} />
        <SectionButton
          icon="angle-right"
          onClick={() => {
            this.currentIndex++;
            this.listFlat.current.scrollToIndex({ index: this.currentIndex, viewOffset: 0 });
          }}
        />
      </SectionContainer>
    );
  }
}

export default DiscoverySection;
