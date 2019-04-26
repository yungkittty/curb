import React from "react";
import PropTypes from "prop-types";
import FormContainer from "./components/form-container";
import InputForm from "../../../../components/input-form";
import Text from "../../../../components/text";

const UserNameForm = ({ containerStyle, textStyle, readOnly, value, ...others }) => (
  <FormContainer style={containerStyle} readOnly={readOnly}>
    {readOnly ? (
      <Text style={textStyle}>{value}</Text>
    ) : (
      <InputForm textStyle={textStyle} value={value} {...others} />
    )}
  </FormContainer>
);

UserNameForm.defaultProps = {
  containerStyle: undefined,
  textStyle: undefined,
  readOnly: false
};

UserNameForm.propTypes = {
  // eslint-disable-next-line
  containerStyle: PropTypes.object,
  // eslint-disable-next-line
  textStyle: PropTypes.object,
  readOnly: PropTypes.bool,
  value: PropTypes.string.isRequired
};

export default UserNameForm;
