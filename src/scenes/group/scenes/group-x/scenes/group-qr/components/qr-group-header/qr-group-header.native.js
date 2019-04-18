import style from "styled-components";
import Container from "../../../../../../../../components/container";
import { windowDimensions } from "../../../../../../../../configurations/window";

const QrHeader = style(Container)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  padding-right: 20px;
  padding-left: 20px;
`;

export default QrHeader;
