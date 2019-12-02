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
    this.onMenuOpen = this.onMenuOpen.bind(this);
    this.onMenuClose = this.onMenuClose.bind(this);
  }

  onMenuOpen() {
    this.setState({ isMenuShowed: true });
  }

  onMenuClose() {
    this.setState({ isMenuShowed: false });
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
      OverlayComponent,
      ...others
    } = this.props;
    const mediaListWithoutText = _.omit(mediaList, "text");
    const postMediaTypesWithoutText = _.omit(postMediaTypes, "text");
    const isOnlyPostTextMode =
      (!!postMediaTypes && _.size(postMediaTypesWithoutText) === 0) ||
      (!postMediaTypes && !!mediaList && _.size(mediaListWithoutText) === 0);
    const cardSize = getCardSize({
      size,
      isCardExtended: !!_.size(mediaListWithoutText) > 0 || !!groupId
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
          {OverlayComponent && React.cloneElement(OverlayComponent)}
          {cardSize.isCardExtended && (
            <CardContent
              mediaList={mediaListWithoutText}
              isPost={!!postMediaTypes}
              cardSize={cardSize}
              groupId={groupId}
              {...others}
            />
          )}
          {!!postMediaTypes && !isOnlyPostTextMode && (
            <CardAddMediaTypes postMediaTypes={postMediaTypesWithoutText} />
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
              _.has(postMediaTypes, "text") && {
                ...postMediaTypes.text,
                value: _.has(mediaList, "text") ? mediaList.text.value : undefined
              }
            }
            groupId={groupId}
            haveMenu={!!cardMenu}
            onMenuClick={this.onMenuOpen}
            {...others}
          />
          {isMenuShowed && <CardMenu optionsList={cardMenu} onClose={this.onMenuClose} />}
        </CardBorderContainer>
        {onFloatingButtonClick && !isMenuShowed && (
          <CardFloatingButton
            postType={!!postMediaTypes && _.size(mediaListWithoutText) === 0}
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
  FooterComponent: undefined,
  OverlayComponent: undefined
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
  FooterComponent: PropTypes.object, // eslint-disable-line
  OverlayComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

export default Card;
