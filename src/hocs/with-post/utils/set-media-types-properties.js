import _ from "lodash";
import React from "react";
import CardVideo from "../../../components/card-video";
import CardMap from "../../../components/card-map";

const setMediaTypesProperties = mediaTypesList => {
  const mediaList = {};
  _.forEach(mediaTypesList, ({ type, data }) => {
    if (type === "text") _.assign(mediaList, { [type]: { value: data } });
    //    if (type === "image") _.assign(mediaList, { [type]: {image} });
    if (type === "video") _.assign(mediaList, { [type]: { component: <CardVideo src={data} /> } });
    if (type === "location")
      _.assign(mediaList, { [type]: { component: <CardMap latitude={48.8566} longitude={2.3522} /> } });
  });
  console.log(mediaList);
  return mediaList;
};

export default setMediaTypesProperties;
