import { node, number, oneOfType, string } from "prop-types";
import React from "react";
import { ModalWithTitle } from "./11-modal-title";
import { TitleAreaWithX } from "./components/title-with-x";

export const ModalWithTitleAndX = ({
  height,
  width,
  title,
  xCallback,
  children
}) => {
  return (
    <ModalWithTitle
      height={height}
      width={width}
      titleArea={<TitleAreaWithX title={title} xCallback={xCallback} />}
    >
      {children}
    </ModalWithTitle>
  );
};

ModalWithTitleAndX.propTypes = {
  height: number, // this is only useful if we need a spinner in the same size popup !
  width: number,
  title: oneOfType([node, string]).isRequired,
  children: node.isRequired
};
