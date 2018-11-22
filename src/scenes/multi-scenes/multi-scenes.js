import React, { Component } from "react";
import Modal from "../../components/modal";
import ContentHandler from "./components/content-handler";

class MultiScenes extends Component {
  constructor(props) {
    super(props);
    const { scenes } = this.props;
    this.state = {
      progress: { progress: 1, total: scenes.length },
      data: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  move(n) {
    this.setState({
      progress: {
        ...this.state.progress,
        progress: this.state.progress.progress + n
      }
    });
  }

  handleChange(event) {
    this.setState({
      data: { ...this.state.data, [event.target.id]: event.target.value }
    });
  }

  render() {
    const { scenes } = this.props;
    const n = this.state.progress.progress - 1;
    return (
      <Modal
        progress={this.state.progress}
        leftIcon={n > 0 ? "arrow-left" : null}
        leftFunc={n > 0 ? this.move.bind(this, -1) : null}
        rightTo={scenes[n].rightTo ? scenes[n].rightTo : { pathname: "/" }}
        button={scenes[n].button}
        buttonTo={scenes[n].buttonTo}
        buttonFunc={this.move.bind(this, 1)}
        hasToValidate={false}
        multiContent={
          <ContentHandler
            scenes={scenes}
            state={n}
            onChange={this.handleChange}
            data={this.state.data}
          />
        }
      />
    );
  }
}

export default MultiScenes;
