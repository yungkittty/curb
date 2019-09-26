import PropTypes from "prop-types";
import styled from "styled-components";
import { platformBools } from "../../configurations/platform";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const withShadow = shadowIndex => WrappedComponent => {
  const WithShadow = styled(WrappedComponent)`
    ${props => {
      const { isShadowShowed } = props;
      if (!isShadowShowed) return "";
      const shadowOffsetHeight = 0.6 * shadowIndex;
      const shadowRadius = 0.54 * shadowIndex;
      const shadowOpacity = 0.0015 * shadowIndex + 0.18;
      return `
        z-index: ${shadowIndex};
        ${(() => {
          switch (true) {
            case platformBools.isWeb:
              return `
                box-shadow: 0px ${shadowOffsetHeight}px ${shadowRadius}px 0px rgba(0, 0, 0, ${shadowOpacity});
              `;
            case platformBools.isAndroid:
              return `
                elevation: ${shadowIndex};
              `;
            case platformBools.isIos:
              return `
                shadow-offset: 0px ${shadowOffsetHeight}px;
                shadow-radius: ${shadowRadius}px;
                shadow-color: rgb(0, 0, 0);
                shadow-opacity: ${shadowOpacity};
              `;
            default:
              return "";
          }
        })()}
      `;
    }}
  `;

  WithShadow.defaultProps = {
    isShadowShowed: true
  };

  WithShadow.propTypes = {
    isShadowShowed: PropTypes.bool
  };

  return WithShadow;
};

export default withShadow;
