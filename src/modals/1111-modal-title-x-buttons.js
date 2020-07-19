import { func, node, number } from "prop-types";
import React from "react";
import { ModalWithTitleAndX } from "./111-modal-title-x";
import { ContentWithButtonArea } from "./components/content-with-button-area";

export const ModalWithTitleAndXAndButtons = ({
  height,
  width,
  title,
  xCallback,
  children,
  buttonArea
}) => (
  <ModalWithTitleAndX
    height={height}
    width={width}
    title={title}
    xCallback={xCallback}
  >
    <ContentWithButtonArea buttonArea={buttonArea}>
      {children}
    </ContentWithButtonArea>
  </ModalWithTitleAndX>
);

ModalWithTitleAndXAndButtons.propTypes = {
  height: number, // this is only useful if we need a spinner in the same size popup !
  width: number,
  title: node.isRequired,
  children: node.isRequired,
  buttonArea: node.isRequired,
  xCallback: func.isRequired
};
