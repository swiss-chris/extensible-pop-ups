import React from "react";
import { number, node } from "prop-types";
import { StyledModal } from "./components/styled-components";

export const Modal = ({ height, width, borderColor, children }) => (
  <StyledModal height={height} width={width} borderColor={borderColor}>
    {children}
  </StyledModal>
);

Modal.propTypes = {
  height: number, // this is only useful if we need a spinner in the same size popup !
  width: number,
  children: node.isRequired
};
