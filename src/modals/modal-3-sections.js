import React from "react";
import { MiddleSection, BottomSection } from "./styled-components";
import { Modal } from "./modal";

export const ModalWith3Sections = ({
  height,
  topSection,
  middleSection,
  bottomSection
}) => (
  <Modal height={height}>
    {topSection}
    <MiddleSection>{middleSection}</MiddleSection>
    <BottomSection>{bottomSection}</BottomSection>
  </Modal>
);
