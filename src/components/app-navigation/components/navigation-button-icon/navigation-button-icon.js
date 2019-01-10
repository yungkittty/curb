import styled from "styled-components";
import NavigationButton from "../navigation-button";
import ButtonIcon from "../../../button-icon";

const NavigationButtonIcon = styled(NavigationButton).attrs(() => ({ as: ButtonIcon }))``;

export default NavigationButtonIcon;
