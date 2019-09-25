import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const DayLabelText = styled(Text)`
  width: 20px;
  text-align: center;
  color: ${props => props.color};
`;

export default DayLabelText;
