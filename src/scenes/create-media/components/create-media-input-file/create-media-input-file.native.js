import styled from "styled-components";
import Container from "../../../../components/container";
import { windowDimensions } from "../../../../configurations/window";

const CreateMediaInputFile = styled(Container)`
  width: ${windowDimensions.width - 40}px;
  height: 240px;
  border-radius: 25px;
`;

export default CreateMediaInputFile;
