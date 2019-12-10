import React from "react";
import { withTheme } from "styled-components";
import CurbModule from "../curb-module";
import UnknownContainer from "./components/unknown-container";
import Icon from "../icon";

class CardUnknown extends CurbModule {
  render() {
    const { theme } = this.props;
    return (
      <UnknownContainer>
        <Icon icon="exclamation-triangle" size="large" color={theme.secondaryColor} />
      </UnknownContainer>
    );
  }
}

export default withTheme(CardUnknown);
