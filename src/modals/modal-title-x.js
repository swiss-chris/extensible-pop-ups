import React from "react";
import { string, node } from "prop-types";
import { Modal } from "./modal";
import { TitleAreaWithX } from "./title-with-x";

export const ModalWithTitleAndX = ({
  height,
  titleAreaContent,
  xCallback,
  children
}) => (
  <Modal height={height}>
    <TitleAreaWithX titleArea={titleAreaContent} xCallback={xCallback} />
    {children}
  </Modal>
);

ModalWithTitleAndX.defaultProps = {
  height: "initial"
};
ModalWithTitleAndX.propTypes = {
  height: string,
  titleAreaContent: node.isRequired,
  children: node.isRequired
};
