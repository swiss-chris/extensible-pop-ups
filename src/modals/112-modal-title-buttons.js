import { node, number } from "prop-types";
import React from "react";
import { ModalWithTitle } from "./11-modal-title";
import { ContentWithButtonArea } from "./components/content-with-button-area";
import { TitleArea } from "./components/styled-components";

export const ModalWithTitleAndButtons = ({
  height,
  borderColor,
  title,
  children,
  buttonArea
}) => (
  <ModalWithTitle
    height={height}
    borderColor={borderColor}
    titleArea={<TitleArea>{title}</TitleArea>}
  >
    <ContentWithButtonArea buttonArea={buttonArea}>
      {children}
    </ContentWithButtonArea>
  </ModalWithTitle>
);

ModalWithTitleAndButtons.propTypes = {
  height: number, // this is only useful if we need a spinner in the same size popup !
  title: node.isRequired,
  children: node.isRequired,
  buttonArea: node.isRequired
};
