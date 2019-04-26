import styled from "styled-components";
import Container from "../../../../../../components/container";

const FormContainer = styled(Container)`
  ${({ readOnly }) => (readOnly ? "padding: 18px 18px 19px 18px;" : "")}
`;

export default FormContainer;
