import React from "react";
import { string, node } from "prop-types";
import { Modal } from "./modal";
import { MiddleSection } from "./styled-components";

export const ModalWith3Sections = ({
  height,
  borderColor,
  topSection,
  middleSection,
  bottomSection
}) => (
  <Modal height={height} borderColor={borderColor}>
    {topSection}
    <MiddleSection>{middleSection}</MiddleSection>
    {bottomSection}
  </Modal>
);

ModalWith3Sections.defaultProps = {
  height: "initial"
};
ModalWith3Sections.propTypes = {
  height: string,
  topSection: node,
  middleSection: node,
  bottomSection: node
};
