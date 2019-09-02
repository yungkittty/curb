import _ from "lodash";
import React from "react";
import styled, { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import DropdownContainer from "./components/dropdown-container/dropdown-container";
import Icon from "../../../icon";

const FormDropdown = styled(
  ({ className, t, tReady, theme, id, options, onChange, value: selectedValue, ...others }) => (
    <DropdownContainer>
      <select
        className={className}
        value={selectedValue}
        onChange={event => onChange({ target: { id, value: event.target.value } })}
        {...others}
      >
        <option disabled defaultValue style={{ display: "none" }} />
        {_.map(options, (item, index) => (
          <option key={index} value={item}>
            {t(`groupCategoryOptions.${item}`)}
          </option>
        ))}
      </select>
      <Icon
        icon="caret-down"
        color={theme.secondaryVariantColor}
        size="extra-small"
        style={{ zIndex: -1, position: "absolute", right: 15 }}
      />
    </DropdownContainer>
  )
)`
  font-family: "Montserrat-Regular";
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  padding: 18px;
  color: ${({ theme }) => theme.fontColor};
  width: 100%;
  height: 100%;
  border-width: 0px;
  appearence: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export default _.flowRight([withTranslation("groupCreate"), withTheme])(FormDropdown);
