import styled from "styled-components";

const Root = styled.input.attrs({
  type: "checkbox",
  name: props => props.name
})``;

export default Root;
