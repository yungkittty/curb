import styled from "styled-components";

const ImageInput = styled.input.attrs(({ onSelect }) => ({
  type: "file",
  accept: "image/gif, image/jpeg, image/png",
  onChange: evt => {
    const file = evt.target.files[0];
    const reader = new FileReader();

    reader.onload = (() => e => {
      onSelect(e.target.result, file);
    })(file);

    reader.readAsDataURL(file);
  }
}))`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  filter: alpha(opacity=0);
`;

export default ImageInput;
