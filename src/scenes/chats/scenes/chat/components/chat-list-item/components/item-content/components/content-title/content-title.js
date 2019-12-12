import _ from "lodash";
import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const ContentTitle = styled(Text).attrs(() => ({ type: "h5" }))`
  ${props => {
    const { inverted, groupTheme, theme } = props;
    const backgroundColor =
      (inverted && theme[`group${_.capitalize(groupTheme)}VariantColor`]) || theme.primaryVariantColor;
    return `
      padding: 10px;
      background-color: ${backgroundColor};
    `;
  }}
`;

export default ContentTitle;
