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
  padding: 0px 20px;
  text-align: center;
  color: white;
`;

export default HeaderDescription;
