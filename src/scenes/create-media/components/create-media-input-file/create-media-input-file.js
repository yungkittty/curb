import styled from "styled-components";
import InputFile from "../../../../components/input-file";

const CreateMediaInputFile = styled(InputFile).attrs(() => ({
  previewStyle: { width: "100%", height: "100%", borderRadius: 35 }
}))`
  width: 100%;
  height: calc(((700px - 70px) * 9) / 16);
  padding: 0px 35px;
`;

export default CreateMediaInputFile;
