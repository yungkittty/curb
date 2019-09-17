import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import withUser from "../../hocs/with-user";
import withGroup from "../../hocs/with-group";
import CardContainer from "./components/card-container";
import CardBorderContainer from "./components/card-border-container";
import CardContent from "./components/card-content";
import CardAddMediaTypes from "./components/card-add-media-types";
import CardFooter from "./components/card-footer";
import CardFloatingButton from "./components/card-floating-button";
import getCardSize from "./utils/get-card-size";

const Card = ({
  style,
  className,
  size,
  postMediaTypes,
  mediaList,
  groupDescription,
  onFloatingButtonClick,
  groupId,
  ...others
}) => {
  const cardSize = getCardSize({
    size,
    isCardExtended: !!_.size(_.omit(mediaList, "text")) > 0 || !!groupId,
    isPostMode: !!postMediaTypes,
    isOnlyPostTextMode: postMediaTypes.length === 1 && postMediaTypes[0].type === "text"
  });
  return (
    <CardContainer
      style={style}
      className={className}
      cardSize={cardSize}
      onClick={() => groupId && `/groups/${groupId}`}
    >
      <CardBorderContainer>
        {cardSize.isCardExtended && (
          <CardContent
            mediaList={_.omit(mediaList, "text")}
            cardSize={cardSize}
            groupId={groupId}
            postType={!!postMediaTypes}
            {...others}
          />
        )}
        {!!postMediaTypes && !cardSize.isOnlyPostTextMode && (
          <CardAddMediaTypes postMediaTypes={postMediaTypes} />
        )}
        <CardFooter
          cardSize={cardSize}
          textDescription={groupDescription}
          isPost={!!postMediaTypes}
          postText={
            _.find(postMediaTypes, { type: "text" }) && {
              ..._.find(postMediaTypes, { type: "text" }),
              value: mediaList.text
            }
          }
          groupId={groupId}
          {...others}
        />
      </CardBorderContainer>
      {onFloatingButtonClick && (
        <CardFloatingButton
          cardSize={cardSize}
          postType={!!postMediaTypes && _.size(_.omit(mediaList, "text")) === 0}
          onFloatingButtonClick={onFloatingButtonClick}
          {...others}
        />
      )}
    </CardContainer>
  );
};

Card.defaultProps = {
  style: undefined,
  className: undefined,
  size: undefined,
  postMediaTypes: undefined,
  mediaList: undefined,
  groupDescription: undefined,
  onFloatingButtonClick: undefined,
  groupId: undefined
};

Card.propTypes = {
  style: PropTypes.array, // eslint-disable-line
  className: PropTypes.string,
  size: PropTypes.string,
  postMediaTypes: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string.isRequired, onClick: PropTypes.func, onSelect: PropTypes.func })
  ),
  mediaList: PropTypes.object, // eslint-disable-line
  groupDescription: PropTypes.string,
  onFloatingButtonClick: PropTypes.func,
  groupId: PropTypes.string
};

export default withGroup(withUser(Card));
