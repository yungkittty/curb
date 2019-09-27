import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const TitleText = styled(Text).attrs(() => {
  const descriptionType = "h1";
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
    const textMaxWidth = 740 - 40;
    return `
      max-width: ${textMaxWidth}px;
      margin-right: 20px;
      text-align: start;
      color: white;
    `;
  }}
`;

export default TitleText;
