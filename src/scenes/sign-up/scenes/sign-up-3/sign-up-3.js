import React from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";
import ContentText from "./components/content-text";
import Text from "../../../../components/text";

const Signup3 = ({ signUp, data: { username, pass } }) => {
  signUp({ username, pass });
  return (
    <ContentContainer>
      <ContentText hm>
        <Text va h1 center b p>
          Your account has been created!
        </Text>
      </ContentText>
    </ContentContainer>
  );
};

Signup3.propTypes = {
  signUp: PropTypes.func.isRequired,
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
  }).isRequired
};

export default Signup3;
