import React from "react";
import { string, node } from "prop-types";
import { ModalContent } from "./styled-components";

export const Modal = ({ height, children }) => (
  <ModalContent height={height}>{children}</ModalContent>
);

Modal.defaultProps = {
  height: "initial"
};
Modal.propTypes = {
  height: string,
  children: node.isRequired
};
