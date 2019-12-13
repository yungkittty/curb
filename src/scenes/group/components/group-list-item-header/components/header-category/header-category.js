import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Stadium from "../../../../../../components/stadium";
import Text from "../../../../../../components/text";

const HeaderCategory = ({
  // eslint-disable-line
  groupCategory,
  stadiumContentColor,
  t
}) => (
  <Stadium
    // eslint-disable-line
    radius="extra-extra-small"
    scale="x2"
    backgroundColor="white"
    component={Text}
    type="h5"
    weight={700}
    contentStyle={{ color: stadiumContentColor }}
  >
    {/* eslint-disable-line */}
    {t(`groupCategoryOptions.${groupCategory}`)}
  </Stadium>
);

HeaderCategory.propTypes = {
  groupCategory: PropTypes.string.isRequired,
  stadiumContentColor: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation("groupOptions")(HeaderCategory);
