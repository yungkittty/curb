import styled from "styled-components";
import Text from "../../../../../../components/text";

const HeaderDescription = styled(Text).attrs(() => {
  const descriptionType = "h3";
  const descriptionWeight = 700;
  const descriptionEllipsizeMode = "tail";
  const descriptionNumberOfLines = 5;
  return {
    type: descriptionType,
    weight: descriptionWeight,
    ellipsizeMode: descriptionEllipsizeMode,
    numberOfLines: descriptionNumberOfLines
  };
})`
  text-align: start;
  color: white;
`;

export default HeaderDescription;
