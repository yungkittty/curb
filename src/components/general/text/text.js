import styled from "styled-components";
import Root from "./root";

const Text = styled(Root)`
    margin-top: 0px;
    margin-bottom: 6px;

    ${props => props.h1 ? " \
    font-size: 38px;        \
    margin-bottom: 22px;    \
    " : null}
    ${props => props.h2 ? " \
    font-size: 32px;        \
    margin-bottom: 20px;    \
    " : null}
    ${props => props.h3 ? " \
    font-size: 24px;        \
    " : null}

    ${props => props.bold ? "font-weight: bold;" : null}
    ${props => props.italic ? "font-style: italic;" : null}
    ${props => props.underline ? "text-decoration: underline black;" : null}

    ${props => props.center ? "text-align: center;" : null}
    
    ${props => props.p ? "margin-bottom: 24px;" : null}
`;

export default Text;
