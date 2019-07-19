import styled from "styled-components";
import InputFile from "../../../../components/input-file";
import { windowDimensions } from "../../../../configurations/window";

const CreateMediaInputFile = styled(InputFile).attrs(() => ({
  previewStyle: { width: "100%", height: "100%", borderRadius: 20 }
}))`
  width: 100%;
  height: ${((windowDimensions.getWidth() - 50) * 9) / 16}px;
  padding: 0px 25px;
`;

export default CreateMediaInputFile;
