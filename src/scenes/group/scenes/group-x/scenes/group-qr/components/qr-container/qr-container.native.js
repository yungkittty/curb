import style from "styled-components";
import Container from "../../../../../../../../components/container";
import { windowDimensions } from "../../../../../../../../configurations/window";

const QrContainer = style(Container)`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 100%;
padding-bottom: ${(windowDimensions.height - 75) / 4}px;
`;

export default QrContainer;
