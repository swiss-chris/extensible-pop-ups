import React from "react";
import { string, node } from "prop-types";
import { Modal } from "./modal";
import { TitleWithX } from "./title-with-x";

export const ModalWithTitleAndX = ({ height, title, children }) => (
  <Modal height={height}>
    <TitleWithX title={title} />
    {children}
  </Modal>
);

ModalWithTitleAndX.defaultProps = {
  height: "initial"
};
ModalWithTitleAndX.propTypes = {
  height: string,
  title: string.isRequired,
  children: node.isRequired
};
