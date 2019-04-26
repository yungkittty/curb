import styled from "styled-components";

const SelectorInputImage = styled.input.attrs(({ onSelect }) => ({
  type: "file",
  accept: "image/jpeg, image/png",
  onChange: evt => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = (() => e => {
      onSelect(e.target.result, file);
    })(file);
    reader.readAsDataURL(file);
  }
}))`
  opacity: 0;
  cursor: pointer;
  filter: alpha(opacity=0);
`;

export default SelectorInputImage;
