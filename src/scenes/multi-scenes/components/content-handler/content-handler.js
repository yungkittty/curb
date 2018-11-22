import React from "react";
import HandlerContainer from "./components/handler-container";
import WindowContent from "../../../../components/popup/components/popup-window/components/window-content";

const ContentHandler = ({ scenes, state, onChange, data }) => (
  <HandlerContainer state={state} length={scenes.length}>
    {scenes.map((scene, i) => (
      <WindowContent
        key={i}
        content={scene.content}
        onChange={onChange}
        data={data}
      />
    ))}
  </HandlerContainer>
);

export default ContentHandler;
