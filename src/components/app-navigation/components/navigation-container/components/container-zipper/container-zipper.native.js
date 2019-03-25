import React from "react";
import ZipperContainer from "./components/zipper-container";
import ZipperRule from "./components/zipper-rule";

const ContainerZipper = props => (
  <ZipperContainer {...props}>
    <ZipperRule />
    <ZipperRule style={{ marginTop: 2.5, marginBottom: 2.5 }} />
    <ZipperRule />
  </ZipperContainer>
);

export default ContainerZipper;
