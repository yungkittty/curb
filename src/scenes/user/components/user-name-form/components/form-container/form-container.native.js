import styled from "styled-components";
import Container from "../../../../../../components/container";

const FormContainer = styled(Container)`
  ${({ readOnly }) => (readOnly ? "padding: 16.25px 18px 16.75px 18px;" : "")}
`;

export default FormContainer;
