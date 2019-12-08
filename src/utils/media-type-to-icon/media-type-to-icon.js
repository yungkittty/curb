const mediaTypeToIcon = mediaType => {
  switch (mediaType) {
    case "text":
      return "font";
    case "image":
      return "image";
    case "video":
      return "video";
    case "location":
      return "map-marker-alt";
    case "event":
      return "calendar-alt";
    case "poll":
      return "poll-h";
    case "link":
      return "link";
    default:
      return undefined;
  }
};

export default mediaTypeToIcon;
