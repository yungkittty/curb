import React from "react";
import PropTypes from "prop-types";
import FileContainer from "./components/file-container";
import FilePreview from "./components/file-preview";
import FileSelector from "./components/file-selector";

const InputFile = ({
  id,
  type,
  editMode,
  data,
  onSelect,
  PreviewComponent: previewComponent,
  PlaceholderComponent: placeholderComponent,
  ...others
}) => (
  <FileContainer>
    {/* eslint-disable-next-line */}
    {!data && placeholderComponent ? (
      placeholderComponent()
    ) : previewComponent ? (
      previewComponent()
    ) : (
      <FilePreview {...others} type={type} data={data} />
    )}
    {editMode && (
      <FileSelector
        type={type}
        onSelect={(objData, file) => {
          onSelect({
            target: {
              id,
              value: { data: objData, file }
            }
          });
        }}
      />
    )}
  </FileContainer>
);

InputFile.defaultProps = {
  data: undefined,
  editMode: false,
  PreviewComponent: null,
  PlaceholderComponent: null
};

InputFile.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["image"]).isRequired,
  data: PropTypes.string,
  editMode: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  PreviewComponent: PropTypes.func,
  PlaceholderComponent: PropTypes.func
};

export default InputFile;
