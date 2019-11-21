import styled from "styled-components";
import withShadow from "../../../../hocs/with-shadow";
import Container from "../../../container";

const DropdownContainer = styled(Container)`
  position: absolute;
  width: 170px;
  border-radius: 16px;
  background: white;
`;

export default withShadow(6)(DropdownContainer);
