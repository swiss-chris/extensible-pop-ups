import { node, number } from "prop-types";
import React from "react";
import { Modal } from "./1-modal";
import { Spacer } from "./components/styled-components";

export const ModalWithTitle = ({ height, width, titleArea, children }) => (
  <Modal height={height} width={width}>
    {titleArea}
    <Spacer height={15} />
    {children}
  </Modal>
);

ModalWithTitle.propTypes = {
  height: number, // this is only useful if we need a spinner in the same size popup !
  width: number,
  titleArea: node.isRequired,
  children: node.isRequired
};
