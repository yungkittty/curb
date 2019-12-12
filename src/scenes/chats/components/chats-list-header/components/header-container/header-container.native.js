import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderContainer = styled(Container)`
  ${props => {
    const containerBorderBottomColor = props.theme.primaryColor;
    return `
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 70px;
      margin-top: 2px;
      margin-bottom: 10px;
      border-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${containerBorderBottomColor};
    `;
  }}
`;

export default HeaderContainer;
