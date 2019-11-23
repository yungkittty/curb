import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import CardContainer from "./components/card-container";
import CardBorderContainer from "./components/card-border-container";
import CardContent from "./components/card-content";
import CardAddMediaTypes from "./components/card-add-media-types";
import CardFooter from "./components/card-footer";
import CardMenu from "./components/card-menu";
import CardFloatingButton from "./components/card-floating-button";
import Button from "../button";
import getCardSize from "./utils/get-card-size";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuShowed: false };
    this.textInputRef = React.createRef();
  }

  clearTextInput() {
    this.textInputRef.current.clear();
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
      HeaderComponent,
      FooterComponent,
      ...others
    } = this.props;

    const cardSize = getCardSize({
      size,
      isCardExtended: !!_.size(_.omit(mediaList, "text")) > 0 || !!groupId,
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
        {HeaderComponent && React.cloneElement(HeaderComponent)}
        <CardBorderContainer>
          {cardSize.isCardExtended && (
            <CardContent
              mediaList={_.omit(mediaList, "text")}
              isPost={!!postMediaTypes}
              cardSize={cardSize}
              groupId={groupId}
              {...others}
            />
          )}
          {!!postMediaTypes && !cardSize.isOnlyPostTextMode && (
            <CardAddMediaTypes postMediaTypes={postMediaTypes} />
          )}
          <CardFooter
            ref={this.textInputRef}
            cardSize={cardSize}
            textDescription={
              groupDescription || (_.size(mediaList) > 0 ? mediaList.text && mediaList.text.value : undefined)
            }
            isNoTextDescriptionPlaceholder={_.size(mediaList) > 0 && _.isUndefined(mediaList.text)}
            isPost={!!postMediaTypes}
            postText={
              _.find(postMediaTypes, { type: "text" }) && {
                ..._.find(postMediaTypes, { type: "text" }),
                value: mediaList.text ? mediaList.text.value : undefined
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
            postType={!!postMediaTypes && _.size(_.omit(mediaList, "text")) === 0}
            onFloatingButtonClick={onFloatingButtonClick}
            {...others}
          />
        )}
        {FooterComponent && React.cloneElement(FooterComponent)}
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
  cardMenu: undefined,
  HeaderComponent: undefined,
  FooterComponent: undefined
};

Card.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  size: PropTypes.string,
  postMediaTypes: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      onSelect: PropTypes.func,
      onClick: PropTypes.func
    })
  ),
  mediaList: PropTypes.object, // eslint-disable-line
  groupDescription: PropTypes.string,
  onFloatingButtonClick: PropTypes.func,
  groupId: PropTypes.string,
  cardMenu: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, icon: PropTypes.icon, onClick: PropTypes.func })
  ),
  HeaderComponent: PropTypes.object, // eslint-disable-line
  FooterComponent: PropTypes.object // eslint-disable-line
};

export default Card;
