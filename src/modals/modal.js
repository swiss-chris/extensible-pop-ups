import React from "react";
import { string, node } from "prop-types";
import { ModalContent } from "./styled-components";

export const Modal = ({ height, borderColor, children }) => (
  <ModalContent height={height} borderColor={borderColor}>
    {children}
  </ModalContent>
);

Modal.defaultProps = {
  height: "initial"
};
Modal.propTypes = {
  height: string, // this is only useful if we need a spinner in the same size popup !
  children: node.isRequired
};
