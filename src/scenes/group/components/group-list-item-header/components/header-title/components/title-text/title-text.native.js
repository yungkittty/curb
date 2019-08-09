import styled from "styled-components";
import Text from "../../../../../../../../components/text";

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
  margin-right: 10px;
  text-align: center;
  color: white;
`;

export default TitleText;
