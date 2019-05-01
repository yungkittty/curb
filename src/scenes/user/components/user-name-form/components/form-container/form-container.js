import styled from "styled-components";
import Container from "../../../../../../components/container";

const FormContainer = styled(Container)`
  ${({ readOnly }) => (readOnly ? "padding: 18px 18px 19px 18px;" : "")}
  ${({ theme, displayPlaceholder, textStyle }) =>
    displayPlaceholder
      ? ` background: ${theme.primaryColor};
          height: ${textStyle.fontSize + 37}px;
          width: 460px;
          border-radius: 16px;
          `
      : ``}
`;

export default FormContainer;
