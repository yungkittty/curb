import React from "react";
import ContentContainer from "./components/content-container";
import ContentText from "./components/content-text";
import Text from "../../../../components/text";

const Signup3 = ({ data }) => {
  return (
    <ContentContainer>
      <ContentText hm>
        <Text va h1 center b p>
          Your account has been created!
        </Text>
        <Text p>
          Username : <Text i>{data.username}</Text>
        </Text>
        <Text p>
          Password : <Text i>{data.pass}</Text>
        </Text>
        <Text p>
          Confirm : <Text i>{data.passConfirm}</Text>
        </Text>
      </ContentText>
    </ContentContainer>
  );
};

export default Signup3;
