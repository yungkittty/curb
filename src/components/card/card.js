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
import CardMenu from "./components/card-menu";
import CardFloatingButton from "./components/card-floating-button";
import getCardSize from "./utils/get-card-size";
import Button from "../button";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isMenuShowed: false };
  }

  render() {
    const { isMenuShowed } = this.state;
    const {
      style,
      className,
      size,
      postMediaTypes,
      mediaList,
      groupDescription,
      onFloatingButtonClick,
      groupId,
      cardMenu,
      ...others
    } = this.props;

    const cardSize = getCardSize({
      size,
      isCardExtended: !!_.size(_.omit(mediaList, "text")) > 0 || !!groupId,
      isPostMode: !!postMediaTypes,
      isOnlyPostTextMode:
        (!!postMediaTypes && _.size(_.omit(postMediaTypes, "text")) === 0) ||
        (!postMediaTypes && !!mediaList && _.size(_.omit(mediaList, "text")) === 0)
    });
    return (
      <CardContainer
        style={style}
        className={className}
        cardSize={cardSize}
        as={groupId && Button}
        onClick={groupId && `/groups/${groupId}`}
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
            textDescription={(_.size(mediaList) > 0 && mediaList.text) || groupDescription}
            isPost={!!postMediaTypes}
            postText={
              _.find(postMediaTypes, { type: "text" }) && {
                ..._.find(postMediaTypes, { type: "text" }),
                value: mediaList.text
              }
            }
            groupId={groupId}
            haveMenu={!!cardMenu}
            onMenuClick={() => this.setState({ isMenuShowed: true })}
            {...others}
          />
          {isMenuShowed && (
            <CardMenu optionsList={cardMenu} onClose={() => this.setState({ isMenuShowed: false })} />
          )}
        </CardBorderContainer>
        {onFloatingButtonClick && !isMenuShowed && (
          <CardFloatingButton
            cardSize={cardSize}
            postType={!!postMediaTypes && _.size(_.omit(mediaList, "text")) === 0}
            onFloatingButtonClick={onFloatingButtonClick}
            {...others}
          />
        )}
      </CardContainer>
    );
  }
}

Card.defaultProps = {
  style: undefined,
  className: undefined,
  size: undefined,
  postMediaTypes: undefined,
  mediaList: undefined,
  groupDescription: undefined,
  onFloatingButtonClick: undefined,
  groupId: undefined,
  cardMenu: undefined
};

Card.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  size: PropTypes.string,
  postMediaTypes: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string.isRequired, onClick: PropTypes.func, onSelect: PropTypes.func })
  ),
  mediaList: PropTypes.object, // eslint-disable-line
  groupDescription: PropTypes.string,
  onFloatingButtonClick: PropTypes.func,
  groupId: PropTypes.string,
  cardMenu: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, icon: PropTypes.icon, onClick: PropTypes.func })
  )
};

export default _.flowRight([
  // eslint-disable-line
  withUser,
  withGroup
])(Card);
