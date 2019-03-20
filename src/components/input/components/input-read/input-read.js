import styled from "styled-components";
import Text from "../../../text";

const InputRead = styled(Text)`
  position: relative;
  top: 18px;
  ${({ textStyle }) => textStyle && `font-size: ${textStyle.fontSize}px;`}
  ${({ textStyle }) => textStyle && `font-weight: ${textStyle.fontWeight};`}
  ${({ textStyle }) => textStyle && `text-align:${textStyle.textAlign};`}
`;

export default InputRead;
