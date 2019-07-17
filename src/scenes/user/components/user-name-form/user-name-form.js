import React from "react";
import PropTypes from "prop-types";
import FormContainer from "./components/form-container";
import InputForm from "../../../../components/input-form";
import Text from "../../../../components/text";

const UserNameForm = ({
  // eslint-disable-line
  containerStyle,
  textStyle,
  readOnly,
  displayPlaceholder,
  value,
  ...others
}) => (
  <FormContainer
    style={containerStyle}
    readOnly={readOnly}
    displayPlaceholder={displayPlaceholder}
    textStyle={textStyle}
  >
    {readOnly ? (
      <Text style={textStyle}>{value}</Text>
    ) : (
      <InputForm textStyle={textStyle} value={value} {...others} />
    )}
  </FormContainer>
);

UserNameForm.propTypes = {
  // eslint-disable-next-line
  containerStyle: PropTypes.object.isRequired,
  // eslint-disable-next-line
  textStyle: PropTypes.object.isRequired,
  readOnly: PropTypes.bool.isRequired,
  displayPlaceholder: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default UserNameForm;
