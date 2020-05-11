import React from "react";
import PollCreate from "../poll-create";
import PollDisplay from "../poll-display";
import CurbModule from "../curb-module";

class CardPoll extends CurbModule {
  render() {
    const { forwardRef, ...others } = this.props;
    return forwardRef ? <PollCreate {...others} ref={forwardRef} /> : <PollDisplay {...others} />;
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
