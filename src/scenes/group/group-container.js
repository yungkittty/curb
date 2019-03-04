import React from "react";
import { connect } from "react-router";
import Group from "./group";
// import { groupsActions } from "../../datas/groups";

class GroupContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <Group {...this.props} />;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupContainer);
