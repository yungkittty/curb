import styled from "styled-components";
import Image from "../../../../../components/image";

const DisplayImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    filter: ${props => props.editMode && "blur(2px)"};
`;

export default DisplayImage;
