import React from "react";
import Poll from "../poll";
import CurbModule from "../curb-module";

class CardPoll extends CurbModule {
  render() {
    const { forwardRef, ...others } = this.props;
    return <Poll {...others} ref={forwardRef} />;
  }
}

export default React.forwardRef(
  // eslint-disable-line
  (props, forwardRef) => (
    <CardPoll
      // eslint-disable-line
      {...props}
      forwardRef={forwardRef}
    />
  )
);
