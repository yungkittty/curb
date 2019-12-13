import React from "react";
import EventCreate from "../event-create";
import EventDisplay from "../event-display";
import CurbModule from "../curb-module";

class CardEvent extends CurbModule {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { forwardRef, ...others } = this.props;
    return forwardRef ? <EventCreate {...others} ref={forwardRef} /> : <EventDisplay {...others} />;
  }
}

export default React.forwardRef(
  // eslint-disable-line
  (props, forwardRef) => (
    <CardEvent
      // eslint-disable-line
      {...props}
      forwardRef={forwardRef}
    />
  )
);
