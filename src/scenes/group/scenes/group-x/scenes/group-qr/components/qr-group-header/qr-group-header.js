import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../../../../components/container";
import Image from "../../../../../../../../components/image";
import Text from "../../../../../../../../components/text";

const QrGroupHeader = ({ src, name }) => (
  <Container
    style={{
      marginTop: 95,
      marginBottom: 60,
      marginLeft: "auto",
      marginRight: "auto",
      display: "table"
    }}
  >
    <Image
      src={src}
      height={120}
      width={120}
      style={{ marginRight: 40, borderRadius: "50%" }}
    />
    <Text type="h2" style={{ display: "table-cell", verticalAlign: "middle" }}>
      {name}
    </Text>
  </Container>
);

QrGroupHeader.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default QrGroupHeader;
