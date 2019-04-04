import styled from "styled-components";
import { Platform } from "react-native";
import Text from "../../../text";

const FormError = styled(Text)`
  position: absolute;
  left: 0px;
  top: ${Platform.OS === "android" ? "62" : "54"}px
  color: ${props => props.theme.errorColor};
`;

export default FormError;
