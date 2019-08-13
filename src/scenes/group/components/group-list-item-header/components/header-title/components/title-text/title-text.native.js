import styled from "styled-components";
import Text from "../../../../../../../../components/text";
import { windowDimensions } from "../../../../../../../../configurations/window";

const TitleText = styled(Text).attrs(() => {
  const descriptionType = "h2";
  const descriptionWeight = 700;
  const descriptionEllipsizeMode = "tail";
  const descriptionNumberOfLines = 1;
  return {
    type: descriptionType,
    weight: descriptionWeight,
    ellipsizeMode: descriptionEllipsizeMode,
    numberOfLines: descriptionNumberOfLines
  };
})`
  ${() => {
    const textMaxWidth = windowDimensions.getWidth() - 70;
    return `
      max-width: ${textMaxWidth}px;
      margin-right: 10px;
      text-align: center;
      color: white;
    `;
  }}
`;

export default TitleText;
