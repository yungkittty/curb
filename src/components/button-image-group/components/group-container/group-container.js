import styled from "styled-components";
import ButtonContainer from "../../../button-container";
import { platformBools } from "../../../../configurations/platform";

const GroupContainer = styled(ButtonContainer)`
  ${props => {
    const X = (() => {
      const Xs = platformBools.isReact
        ? // eslint-disable-line
          [undefined, 60, 100, 300]
        : [undefined, 50, 70, 200];
      switch (props.size) {
        case "extra-small":
          return Xs[0];
        case "small":
          return Xs[1];
        case "medium":
          return Xs[2];
        case "large":
          return Xs[3];
        default:
          return undefined;
      }
    })();
    return `
      width: ${X}px;
      min-width: ${X}px;
      height: ${X}px;
      min-height: ${X}px;
    `;
  }}
`;

export default GroupContainer;
