import styled from "styled-components";
import Container from "../../../container";

const NavigationContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 0px;
  top: 0px;
  flex-direction: column;
<<<<<<< HEAD
  width: 80px;
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  background-color: ${props => props.theme.pimaryColor};
=======
  justify-content: space-between;
  width: 80px;
  height: 100%;
  background-color: ${({ theme }) => theme.pimaryColor};
>>>>>>> c6916fa5c8ecb1c8cf35fe4fc568e1793fe12c66
`;

export default NavigationContainer;
