import _ from "lodash";
import React from "react";
import CardVideo from "../../../components/card-video";
import CardMap from "../../../components/card-map";
import CardImageGallery from "../../../components/card-image-gallery";
import CardEvent from "../../../components/card-event";
import CardUnknown from "../../../components/card-unknown";

const setMediaTypesProperties = mediaTypesList => {
  const mediaList = {};
  _.forEach(mediaTypesList, ({ id: contentId, type, data }) => {
    switch (type) {
      case "text":
        _.assign(mediaList, { [type]: { value: data } });
        break;
      case "image": {
        const { image: { value = [] } = {} } = mediaList;
        const newImageList = [...value, { data }];
        _.assign(mediaList, {
          [type]: { component: <CardImageGallery imageList={newImageList} />, value: newImageList }
        });
        break;
      }
      case "video":
        _.assign(mediaList, { [type]: { component: <CardVideo src={data} /> } });
        break;
      case "location":
        _.assign(mediaList, { [type]: { component: <CardMap {...JSON.parse(data)} /> } });
        break;
      case "event":
        _.assign(mediaList, {
          [type]: { component: <CardEvent {...JSON.parse(data)} contentId={contentId} /> }
        });
        break;
      default:
        _.assign(mediaList, { [type]: { component: <CardUnknown /> } });
        break;
    }
  });
  return mediaList;
};

export default setMediaTypesProperties;
