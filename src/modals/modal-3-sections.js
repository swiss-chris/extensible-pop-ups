import React from "react";
import { Modal } from "./modal";
import { MiddleSection } from "./styled-components";

export const ModalWith3Sections = ({
  height,
  topSection,
  middleSection,
  bottomSection
}) => (
  <Modal height={height}>
    {topSection}
    <MiddleSection>{middleSection}</MiddleSection>
    {bottomSection}
  </Modal>
);
