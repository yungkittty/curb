import styled from "styled-components";
import { Platform } from "react-native";
import Text from "../../../text";

const FormError = styled(Text)`
  position: absolute;
  left: 0px;
  bottom: ${Platform.OS === "android" ? "-18" : "-10"}px
  color: ${props => props.theme.errorColor};
`;

export default FormError;
