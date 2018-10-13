import styled from "styled-components";
import Root from "./root";

const Text = styled(Root)`
    font-size: 16px;
    line-height: 28px;
    margin: 0px;
    font-family: Montserrat;

    ${props => props.h1 ? " \
    font-size: 38px;        \
    line-height: 34px;      \
    " : null}
    ${props => props.h2 ? " \
    font-size: 32px;        \
    line-height: 42px;      \
    margin-bottom: 22px;    \
    " : null}
    ${props => props.h3 ? " \
    font-size: 24px;        \
    " : null}

    ${props => props.bold ? "font-family: Montserrat-Bold;" : null}
    ${props => props.italic ? "font-style: italic;" : null}
    ${props => props.underline ? "text-decoration: underline black;" : null}

    ${props => props.center ? "text-align: center;" : null}
    
    ${props => props.p ? "margin-bottom: 24px;" : null}
`;

export default Text;
