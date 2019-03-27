import styled from "styled-components";
import Text from "../../../text";

const InputRead = styled(Text)`
    ${({ textStyleNative }) =>
      textStyleNative && `font-size: ${textStyleNative.fontSize}px;`}
    ${({ textStyleNative }) =>
      textStyleNative && `font-weight: ${textStyleNative.fontWeight};`}
    ${({ textStyleNative }) =>
      textStyleNative && `text-align:${textStyleNative.textAlign};`}
  `;

export default InputRead;
