import styled from "styled-components";
import Container from "../../../../../../../../components/container";

const InputContainer = styled(Container)`
  ${props => {
    const containerBackgroundColor = props.theme.primaryVariantColor;
    return `
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80px;
      min-height: 80px;
      padding-left: 20px;
      padding-right: 20px;
      background-color: ${containerBackgroundColor};
    `;
  }}
`;

export default InputContainer;
