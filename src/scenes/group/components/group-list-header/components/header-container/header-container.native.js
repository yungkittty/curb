import _ from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../../../../components/container";

/** @todo all elements directly inside scroll-container need min-* ! */

const HeaderContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 100%;
  height: 350px;
  min-height: 350px;
  margin-bottom: 40px;
  background-color: ${props => props.theme[`group${_.capitalize(props.groupTheme)}Color`]};
`;

HeaderContainer.propTypes = { groupTheme: PropTypes.string.isRequired };

export default HeaderContainer;
