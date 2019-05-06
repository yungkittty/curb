import React from "react";
import ImageUser from "../../components/image-user";
import withCurrentUser from "../../hocs/with-current-user";

// Regarder sur mobile si les proportions sont ok :+1:

const User = ({ userId }) => (
  <React.Fragment>
    <ImageUser userId={userId} size="extra-small" />
    <ImageUser userId={userId} size="small" />
    <ImageUser userId={userId} size="medium" />
    <ImageUser userId={userId} size="large" />
    <ImageUser userId={userId} size="extra-large" />
  </React.Fragment>
);

export default withCurrentUser(User);
