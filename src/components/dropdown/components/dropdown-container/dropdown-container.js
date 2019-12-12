import styled from "styled-components";
import withShadow from "../../../../hocs/with-shadow";
import Container from "../../../container";

const DropdownContainer = styled(Container)`
  position: absolute;
  width: 240px;
  border-radius: 20px;
  background: white;
  overflow: hidden;
`;

export default withShadow(6)(DropdownContainer);
