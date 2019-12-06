import styled from "styled-components";
import Container from "../../../../../../../../../../../../components/container";

const EventContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75%;
  background-color: ${props => props.color};
  align-items: center;
  justify-content: space-evenly;
`;

export default EventContentContainer;
