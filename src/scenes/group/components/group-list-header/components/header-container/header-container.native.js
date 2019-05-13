import _ from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../../../../components/container";

const HeaderContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;
  min-width: 100%;
  min-height: 350px;
  padding: 0px 20px;
  margin-bottom: 40px;
  background-color: ${props => props.theme[`group${_.capitalize(props.groupTheme)}Color`] || "transparent"};
`;

HeaderContainer.propTypes = { groupTheme: PropTypes.string.isRequired };

export default HeaderContainer;
