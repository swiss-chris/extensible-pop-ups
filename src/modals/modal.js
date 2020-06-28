import React from "react";
import { ModalContent } from "./styled-components";

export const Modal = ({ height, children }) => (
  <ModalContent height={height}>{children}</ModalContent>
);
