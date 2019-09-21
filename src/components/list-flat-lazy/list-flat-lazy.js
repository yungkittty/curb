import React from "react";
import PropTypes from "prop-types";
import ListFlat from "../list-flat";

const ListFlatLazy = ({
  // eslint-disable-line
  isEndReached,
  onEndReachedFetch,
  ...others
}) => {
  const currentPageRef = React.useRef(0);
  const currentCountMaxRef = React.useRef(0);

  const getCurrentPage = () => {
    currentPageRef.current += 1;
    return currentPageRef.current;
  };

  const getCurrentCount = () => {
    const { data, horizontal, getItemLayout } = others;
    const itemLength = getItemLayout(data[0], 0).length;
    const listLength = horizontal ? window.innerWidth : window.innerHeight;
    currentCountMaxRef.current = Math.round(listLength / itemLength);
    return currentCountMaxRef.current;
  };

  React.useEffect(() => {
    if (isEndReached) return;
    onEndReachedFetch({
      page: getCurrentPage(),
      count: getCurrentCount()
    });
  }, []);

  const isEndReachable = others.data.length >= getCurrentCount();

  return (
    <ListFlat
      // eslint-disable-lines
      {...others}
      onEndReachedThreshold={0.1}
      onEndReached={() => {
        if (isEndReached && !isEndReachable) return;
        onEndReachedFetch({
          page: getCurrentPage(),
          count: getCurrentCount()
        });
      }}
    />
  );
};

ListFlatLazy.propTypes = {
  isEndReached: PropTypes.bool.isRequired,
  onEndReachedFetch: PropTypes.func.isRequired
};

export default ListFlatLazy;
