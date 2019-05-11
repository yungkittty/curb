import styled from "styled-components";
import InputFile from "../../../../components/input-file";

const CreateMediaInputFile = styled(InputFile).attrs(() => ({
  previewStyle: { width: "100%", height: "100%", borderRadius: 35 }
}))`
  width: 100%;
  height: 360px;
  padding: 0px 40px;
`;

export default CreateMediaInputFile;
