import { func, node, number, string } from "prop-types";
import React from "react";
import { ModalWithTitleAndXAndButtons } from "./1111-modal-title-x-buttons";
import { ButtonArea, PrimaryButton } from "./components/styled-components";

export const ModalWithTitleAndPrimaryButtonAndX = ({
  height,
  borderColor,
  title,
  children,
  primaryButtonText,
  primaryButtonCallback,
  xCallback
}) => (
  <ModalWithTitleAndXAndButtons
    height={height}
    borderColor={borderColor}
    title={title}
    buttonArea={
      <ButtonArea>
        <PrimaryButton onClick={primaryButtonCallback}>
          {primaryButtonText}
        </PrimaryButton>
      </ButtonArea>
    }
    xCallback={xCallback}
  >
    {children}
  </ModalWithTitleAndXAndButtons>
);

ModalWithTitleAndPrimaryButtonAndX.propTypes = {
  height: number, // this is only useful if we need a spinner in the same size popup !
  borderColor: string,
  title: string.isRequired,
  children: node.isRequired,
  primaryButtonText: string.isRequired,
  primaryButtonCallback: func.isRequired,
  xCallback: func.isRequired
};
