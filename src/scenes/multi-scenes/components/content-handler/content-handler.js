import React from "react";
import HandlerContainer from "./components/handler-container";
import ModalContent from "../../../../components/modal/components/modal-content";

const ContentHandler = ({ scenes, state, onChange, data }) => (
  <HandlerContainer state={state} length={scenes.length}>
    {scenes.map((scene, i) => (
      <ModalContent
        key={i}
        content={state === i || state - 1 === i ? scene.content : null}
        onChange={onChange}
        data={data}
      />
    ))}
  </HandlerContainer>
);

export default ContentHandler;
