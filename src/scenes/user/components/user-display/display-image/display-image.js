import styled from "styled-components";
import Image from "../../../../../components/image";

const DisplayImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: ${props => (props.editMode ? "blur(2px)" : "blur(0px)")};
`;

export default DisplayImage;
