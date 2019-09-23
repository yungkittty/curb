/* eslint-disable */

import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Card from "../../../../components/card";
import Container from "../../../../components/container";
import { platformBools } from "../../../../configurations/platform";

const GroupListItemPost = ({
  // eslint-disable-line
  postId,
  postCreatorId,
  postGroupId,
  postMedias,
  postReactions,
  groupGradientColors
  // isPostPinned
}) => {
  const getPostMedias = () =>
    _.reduce(
      postMedias,
      (postMediasOthers, postMedia) => ({
        ...postMediasOthers,
        [postMedia.type]: (() => {
          switch (postMedia.type) {
            case "text":
              return postMedia.data;
            default:
              return <Container {...postMedia} />;
          }
        })()
      }),
      {}
    );

  const getPostOptions = () => {
    const postOptions = [];

    // ...

    const postOptionsFirstIcon = "flag";
    const postOptionsFirstText = "Report";
    const postOptionsFirstOnClick = () => {};

    postOptions[0] = {
      icon: postOptionsFirstIcon,
      text: postOptionsFirstText,
      onClick: postOptionsFirstOnClick
    };

    // ...

    // ...

    return { icon: "ellipsis-v", optionsList: postOptions };

    /* return {
      icon: "ellipsis-v",
      optionsList: [
        { icon: "flag", text: "report", onClick: () => {} },
        { icon: "trash", text: "delete", onClick: () => {} }
      ]
    }; */
  };

  return (
    <Card
      // eslint-disable-line
      userId={postCreatorId}
      mediaList={getPostMedias()}
      dropdownMenu={getPostOptions()}
      likeNumber={postReactions.number}
      floatingButtonColor={groupGradientColors[0]}
      onFloatingButtonClick={() => {}}
      style={{
        margin: "auto",
        marginBottom: platformBools.isWeb ? 80 : 40
      }}
    />
  );
};

// GroupListItemPost.propTypes = {};

export default GroupListItemPost;
