import React from "react";
import PropTypes from "prop-types";
import FooterContainer from "./components/footer-container";
import FooterOrigin from "./components/footer-origin";
import FooterTextInput from "./components/footer-text-input";
import FooterText from "./components/footer-text";
import FooterMenu from "./components/footer-menu";

class CardFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isExtended: false };
  }

  render() {
    const { isExtended } = this.state;
    const {
      forwardedRef,
      cardSize,
      userId,
      textDescription,
      isNoTextDescriptionPlaceholder,
      isPost,
      postText,
      haveMenu,
      onMenuClick,
      ...others
    } = this.props;
    return (
      <FooterContainer isCardSmall={cardSize.isSmall}>
        {!!userId && <FooterOrigin {...others} cardSize={cardSize} userId={userId} isPost={isPost} />}
        {isPost ? (
          postText && <FooterTextInput {...postText} ref={forwardedRef} isMultiline autoResize />
        ) : (
          <FooterText
            isCardSmall={cardSize.isSmall}
            textDescription={textDescription}
            onClick={() => this.setState({ isExtended: true })}
            isExtended={isExtended}
            isNoTextDescriptionPlaceholder={isNoTextDescriptionPlaceholder}
          />
        )}
        {haveMenu && (textDescription || isNoTextDescriptionPlaceholder) && (
          <FooterMenu onMenuClick={onMenuClick} />
        )}
      </FooterContainer>
    );
  }
}

CardFooter.defaultProps = {
  userId: undefined,
  textDescription: undefined,
  isNoTextDescriptionPlaceholder: undefined,
  postText: undefined
};

CardFooter.propTypes = {
  forwardedRef: PropTypes.object, // eslint-disable-line
  cardSize: PropTypes.shape({
    isSmall: PropTypes.bool,
    isCardExtended: PropTypes.bool,
    width: PropTypes.number,
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  userId: PropTypes.string,
  textDescription: PropTypes.string,
  isNoTextDescriptionPlaceholder: PropTypes.bool,
  isPost: PropTypes.bool.isRequired,
  postText: PropTypes.shape({ value: PropTypes.string, onChange: PropTypes.func }),
  haveMenu: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired
};

export default React.forwardRef(
  // eslint-disable-line
  (props, forwardedRef) => (
    <CardFooter
      // eslint-disable-line
      {...props}
      forwardedRef={forwardedRef}
    />
  )
);
