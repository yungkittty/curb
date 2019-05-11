import styled from "styled-components";
import InputFile from "../../../../components/input-file";
import { windowDimensions } from "../../../../configurations/window";

const CreateMediaInputFile = styled(InputFile).attrs(() => ({
  previewStyle: { width: "100%", height: "100%", borderRadius: 20 }
}))`
  width: 100%;
  height: ${((windowDimensions.width - 40) * 9) / 16}px;
  padding: 0px 20px;
`;

export default CreateMediaInputFile;
