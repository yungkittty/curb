import styled from "styled-components";
import Text from "../../../../../../components/text";

const HeaderDescription = styled(Text).attrs(() => {
  const descriptionType = "h4";
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
  color: white;
`;

export default HeaderDescription;
