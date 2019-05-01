import styled from "styled-components";
import Container from "../../../../../../components/container";

const FormContainer = styled(Container)`
  ${({ readOnly }) => (readOnly ? "padding: 16.25px 18px 16.75px 18px;" : "")}
  ${({ theme, displayPlaceholder, textStyle }) =>
    displayPlaceholder
      ? ` background: ${theme.primaryColor};
          height: ${textStyle.fontSize + 33}px;
          width: 300px;
          border-radius: 12px;
          `
      : ``}
`;

export default FormContainer;
