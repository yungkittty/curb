import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";
import ContentComponent from "./components/content-component";
import ContentSlide from "./components/content-slide";

class ModalContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      flow: -1
    };

    this.setData = this.setData.bind(this);
    this.setComponent = this.setComponent.bind(this);
  }

  setData(newData) {
    const { data } = this.state;
    this.setState({ data: { ...data, ...newData } });
  }

  setComponent(newComponent, flow) {
    const { resetModal, slideComponent } = this.props;

    this.setState({ flow });

    resetModal(newComponent, flow);
    slideComponent(newComponent, flow);
  }

  render() {
    const { setData, setComponent } = this;
    const { oldComponent, component, sceneProps, modalLoading } = this.props;
    const { flow, data } = this.state;

    const props = { ...sceneProps, setData, setComponent, data };

    const oldProps = {
      ...props,
      setData: () => {},
      setTitle: () => {},
      setProgress: () => {},
      setLeftIcon: () => {},
      setLeftClick: () => {},
      setRightIcon: () => {},
      setRightCick: () => {},
      setComponent: () => {},
      setButtonTitle: () => {},
      setButtonClick: () => {}
    };

    return (
      <ContentContainer>
        {flow === 1 && (
          <ContentComponent component={oldComponent} props={oldProps} />
        )}
        <ContentComponent component={component} props={modalLoading ? oldProps : props} modalLoading={modalLoading} />
        {flow === -1 && (
          <ContentComponent component={oldComponent} props={oldProps} />
        )}
      </ContentContainer>
    );
  }
}

ModalContent.defaultProps = {
  component: undefined,
  oldComponent: undefined,
  sceneProps: undefined,
  modalLoading: undefined
};

ModalContent.propTypes = {
  resetModal: PropTypes.func.isRequired,
  slideComponent: PropTypes.func.isRequired,
  component: PropTypes.func,
  oldComponent: PropTypes.func,
  /* eslint-disable-next-line */
  sceneProps: PropTypes.object,
  modalLoading: PropTypes.bool
};

export default ContentSlide(ModalContent);
