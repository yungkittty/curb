import React from "react";
import PropTypes from "prop-types";
import FileContainer from "./components/file-container";
import FilePreview from "./components/file-preview";
import FileSelector from "./components/file-selector";

const InputFile = ({
  className,
  style,
  id,
  type,
  editMode,
  data,
  onSelect,
  Placeholder: placeholder,
  ...others
}) => {
  return (
    <FileContainer className={className} style={style}>
      {/* eslint-disable-next-line */}
      {!data && placeholder ? placeholder() : <FilePreview {...others} type={type} data={data} />}
      {editMode && (
        <FileSelector
          type={type}
          onSelect={(objData, file) => 
            onSelect({
              target: {
                id,
                value: { data: objData, file }
              }
            });
          }
        />
      )}
    </FileContainer>
  );
};

InputFile.defaultProps = {
  className: undefined,
  style: undefined,
  data: undefined,
  editMode: false,
  Placeholder: null
};

InputFile.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["image"]).isRequired,
  data: PropTypes.string,
  editMode: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  Placeholder: PropTypes.func
};

export default InputFile;
