import styled from "styled-components";
import Text from "../../../../../../../../../text";

const TitleContainer = styled(Text)`
  position: relative;
  text-align: center;
  font-size: 18px;
  margin: auto;
  width: 100%;
  color: ${props => (props.loading ? "#F2F2F2" : "#ffffff")};
`;

export default TitleContainer;
