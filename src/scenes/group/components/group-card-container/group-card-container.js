import styled from "styled-components";
import Card from "../../../../components/card";

const GroupCardContainer = styled(Card)`
  align-self: center;
  margin-${({ postMediaTypes }) => (postMediaTypes ? "bottom" : "top")}: 70px;
`;

export default GroupCardContainer;
