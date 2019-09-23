// https://stackoverflow.com/a/24133340

const getScaledSize = (
  // eslint-disable-line
  mediaWidth,
  mediaHeight,
  areaWidth,
  areaHeight
) => {
  if (!mediaWidth || !mediaHeight) return { width: 0, height: 0 };
  const mediaRatio = mediaWidth / mediaHeight;
  let mediaWidthScaled = mediaWidth;
  let mediaHeightScaled = mediaHeight;
  if (mediaRatio >= 1) {
    mediaWidthScaled = areaWidth;
    mediaHeightScaled = mediaWidthScaled / mediaRatio;
    if (mediaHeightScaled > areaHeight) {
      mediaHeightScaled = areaHeight;
      mediaWidthScaled = areaHeight * mediaRatio;
  }} else {
    mediaHeightScaled = areaHeight;
    mediaWidthScaled = mediaHeightScaled * mediaRatio;
    if (mediaWidthScaled > areaWidth) {
      mediaWidthScaled = areaWidth;
      mediaHeightScaled = areaWidth / mediaRatio;
  }}
  return {
    width: mediaWidthScaled,
    height: mediaHeightScaled
  };
};

export default getScaledSize;
