import styled from "styled-components";
import Root from "./root";

const Section = styled(Root)`
  ${props => (props.center ? "margin: 0 auto;" : null)};
`;

export default Section;
