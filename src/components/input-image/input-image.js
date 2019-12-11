import styled from "styled-components";

const InputImage = styled.input.attrs(({ onSelect }) => ({
  type: "file",
  accept: "image/jpeg, image/png, image/gif",
  onChange: evt => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = (() => e => {
      onSelect(e.target.result, file);
    })(file);
    reader.readAsDataURL(file);
  }
}))`
  padding: 0px;
  opacity: 0;
  cursor: pointer;
`;

export default InputImage;
