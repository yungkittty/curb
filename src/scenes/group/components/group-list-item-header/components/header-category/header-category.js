import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Stadium from "../../../../../../components/stadium";
import Text from "../../../../../../components/text";
import { platformBools } from "../../../../../../configurations/platform";

const HeaderCategory = ({
  // eslint-disable-line
  groupCategory,
  groupGradientColors,
  t
}) => {
  const categoryMarginBottom = platformBools.isWeb ? 20 : 10;
  const categoryTextColor = groupGradientColors[1];
  return (
    <Stadium
      // eslint-disable-line
      radius="extra-extra-small"
      scale="x2"
      backgroundColor="white"
      style={{ marginBottom: categoryMarginBottom }}
      component={Text}
      type="h5"
      weight={700}
      contentStyle={{ color: categoryTextColor }}
    >
      {/* eslint-disable-line */}
      {t(`groupCategoryOptions.${groupCategory}`)}
    </Stadium>
  );
};

HeaderCategory.propTypes = {
  groupCategory: PropTypes.string.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation("groupOptions")(HeaderCategory);
