import styled from "styled-components";
import Container from "../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ImageContainer = styled(Container)`
    position: relative;
    display: flex;
    border-radius: 170px;
    overflow: hidden;
    width: 170px;
    height: 170px;
    margin-top: 70px;
    ${screenWidthsMedias.large`
     border-radius: 200px;
     width: 200px;
     height: 200px;
    `};
`;

export default ImageContainer;
