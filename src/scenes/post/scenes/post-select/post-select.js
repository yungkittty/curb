import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalTitle from "../../../../components/app-modal-title";
import ListFlat from "../../../../components/list-flat";
import ModalListItem from "../../../../components/modal-list-item";
/* eslint-disable */
import PostText from "../post-text";
import PostImage from "../post-image";
import modulesList from "../../../../utils/modules-list/modules-list";
import ItemContainer from "../../../../components/modal-list-item/components/item-container";

/* eslint-enable */

class CreateGroup3 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderSteps,
      setAppModalScene,
    } = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.goToNext = this.goToNext.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 1, headerSteps: 2 });
  }

  goToNext(modules) {
    const { setAppModalScene } = this.props;
    if (modules == "image") {
      setAppModalScene({ scene: PostImage , sceneDirection: 1 });
    }
    if (modules == "text") {
      setAppModalScene({scene : PostText , sceneDirection: 1});
    }
  }

  handleChange(module) {
    const {
      modules: { value }
    } = this.props;
    console.log(module)
    console.log(value)
    this.goToNext(module);
  }

  render() {
    const {
      t,
      modules: { value }
    } = this.props;

    return (
      <ListFlat
        data={modulesList}
        extraData={{ value }}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <React.Fragment>
            <AppModalTitle>{t("modules")}</AppModalTitle>
          </React.Fragment>
        )}
        renderItem={({ item }) => (
          <ModalListItem
            icon={item.icon}
            title={t(`modules:${item.id}.title`)}
            description={item.id}
            onClick={() => this.handleChange(item.id)}
          />
        )}
      />
    );
  }
}

CreateGroup3.defaultProps = {
  modules: { value: [], error: undefined }
};

CreateGroup3.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  modules: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withTranslation("createGroup")(CreateGroup3);
