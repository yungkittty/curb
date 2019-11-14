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
      cardSize,
      userId,
      textDescription,
      isPost,
      postText,
      haveMenu,
      onMenuClick,
      ...others
    } = this.props;
    return (
      <FooterContainer cardSize={cardSize}>
        {!!userId && <FooterOrigin cardSize={cardSize} userId={userId} isPost={isPost} {...others} />}
        {isPost ? (
          postText && <FooterTextInput isMultiline {...postText} />
        ) : (
          <FooterText
            cardSize={cardSize}
            userId={userId}
            textDescription={textDescription}
            onClick={() => this.setState({ isExtended: true })}
            isExtended={isExtended}
          />
        )}
        {haveMenu && <FooterMenu onMenuClick={onMenuClick} />}
      </FooterContainer>
    );
  }
}

CardFooter.defaultProps = {
  userId: undefined,
  textDescription: undefined,
  postText: undefined
};

CardFooter.propTypes = {
  cardSize: PropTypes.shape({
    size: PropTypes.string,
    isCardExtended: PropTypes.bool,
    width: PropTypes.number,
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  userId: PropTypes.string,
  textDescription: PropTypes.string,
  isPost: PropTypes.bool.isRequired,
  postText: PropTypes.shape({ value: PropTypes.string, onChange: PropTypes.func }),
  haveMenu: PropTypes.bool.isRequired,
  onMenuClick: PropTypes.func.isRequired
};

export default CardFooter;
