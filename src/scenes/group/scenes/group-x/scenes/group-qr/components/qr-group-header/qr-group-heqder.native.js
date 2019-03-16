import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../../../../components/container";
import Image from "../../../../../../../../components/image";
import Text from "../../../../../../../../components/text";

const QrGroupHeader = ({ src, name }) => (
  <Container
    style={{
      marginTop: 87,
      marginBottom: 49,
      marginLeft: "auto",
      marginRight: "auto",
      display: "table"
    }}
  >
    <Image src={src} height={80} width={80} style={{ marginRight: 24 }} />
    <Text type="h2" style={{ verticalAlign: "middle" }}>
      {name}
    </Text>
  </Container>
);

QrGroupHeader.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default QrGroupHeader;
