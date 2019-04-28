import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../../../../../../components/text";

const ListItemTitle = styled(Text).attrs(() => ({ ellipsizeMode: "tail", numberOfLines: 1 }))`
  width: 70px;
  ${props => props.isFetchingGroup && !props.groupName && "height: 14px;"}
  border-radius: 5px;
  text-align: center;
  ${props => props.isFetchingGroup && !props.groupName && `background: ${props.theme.primaryVariantColor};`}
`;

ListItemTitle.propTypes = {
  isFetchingGroup: PropTypes.bool.isRequired,
  groupName: PropTypes.string.isRequired
};

export default ListItemTitle;
