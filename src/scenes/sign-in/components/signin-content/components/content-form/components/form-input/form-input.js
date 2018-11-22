import styled from "styled-components";
import Input from "../../../../../../../../components/input";
import { screenWidthsMedias } from "../../../../../../../../configurations/screen";

const FormInput = styled(Input)`
  width: 100%;

  ${screenWidthsMedias.large`
    box-sizing: border-box;
  `};
`;

export default FormInput;
