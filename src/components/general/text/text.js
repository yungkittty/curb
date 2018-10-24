import styled from "styled-components";
import Root from "./root";

const Text = styled(Root)`
    font-size: 16px;
    line-height: 28px;
    margin: 0px;
    font-family: Montserrat;

    ${props => (props.h1 ? "font-size: 34px; line-height: 34px;" : null)}
    ${props =>
      props.h2
        ? "font-size: 32px; line-height: 42px; margin-bottom: 22px;"
        : null}
    ${props => (props.h3 ? "font-size: 24px;" : null)}
    ${props => (props.p ? "display: flex; margin-bottom: 24px;" : null)}

    ${props => (props.hm ? "height: 100%;" : null)}

    ${props => (props.b ? "font-weight: bold;" : null)}
    ${props => (props.i ? "font-style: italic;" : null)}
    ${props => (props.u ? "text-decoration: underline black;" : null)}

    ${props => (props.center ? "text-align: center;" : null)}

    ${props => (props.va ? "margin: auto 0;" : null)}
`;

export default Text;
