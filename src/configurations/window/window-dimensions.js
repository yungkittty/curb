import { osName } from "react-device-detect";

const scrollBarWidth = osName === "Windows" ? 17 : 15;

const windowDimensions = { scrollBarWidth };

export default windowDimensions;
