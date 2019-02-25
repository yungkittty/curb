import React, { Component } from "react";

const ContentSlide = WrappedComponent => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      const { component } = this.props;

      this.state = {
        component,
        oldComponent: undefined
      };

      this.slideComponent = this.slideComponent.bind(this);
    }

    slideComponent(newComponent, flow) {
      const { component } = this.state;
      const { forwardedRef } = this.props;

      const modalContent = forwardedRef.current;

      modalContent.style.transition = null;
      modalContent.style.transform =
        flow === 1 ? "translateX(0%)" : "translateX(-50%)";

      this.setState(
        {
          oldComponent: component,
          component: newComponent
        },
        () =>
          setTimeout(() => {
            modalContent.style.transition = "all 0.45s ease-in-out";
            modalContent.style.transform =
              flow === 1 ? "translateX(-50%)" : "translateX(0%)";
          }, 80)
      );
    }

    render() {
      const { component, oldComponent } = this.state;
      const { forwardedRef } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          slideComponent={this.slideComponent}
          component={component}
          oldComponent={oldComponent}
          forwardedRef={forwardedRef}
        />
      );
    }
  }

  return React.forwardRef((props, ref) => (
    <NewComponent {...props} forwardedRef={ref} />
  ));
};

export default ContentSlide;
