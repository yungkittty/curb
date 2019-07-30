import styled from "styled-components";
import Container from "../../../../../../components/container";

const FormContainer = styled(Container)`
  ${({ readOnly }) => (readOnly ? "padding: 18px;" : "")}
  ${({ theme, displayPlaceholder, textStyle }) =>
    displayPlaceholder
      ? `
        background: ${theme.primaryVariantColor};
        height: ${textStyle.fontSize}px;
        width: 300px;
        border-radius: 15px;
      `
      : ""}
`;

export default FormContainer;
