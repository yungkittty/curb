import styled from "styled-components";
import Container from "../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentContainer = styled(Container)`
    ${screenWidthsMedias.large`
        width: 460px;
    `};
    display: inline-flex;
    flex-direction: column;
    align-items: center;
`;

export default ContentContainer;
