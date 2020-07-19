import { func, node, number, string } from "prop-types";
import React from "react";
import { ModalWithTitleAndButtons } from "./112-modal-title-buttons";
import {
  ButtonArea,
  PrimaryButton,
  SecondaryButton
} from "./components/styled-components";

export const ModalWithTitleAndPrimaryAndSecondaryButtons = ({
  height,
  title,
  borderColor,
  children,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonCallback,
  secondaryButtonCallback
}) => (
  <ModalWithTitleAndButtons
    height={height}
    borderColor={borderColor}
    title={title}
    buttonArea={
      <ButtonArea>
        <PrimaryButton onClick={primaryButtonCallback}>
          {primaryButtonText}
        </PrimaryButton>
        <SecondaryButton onClick={secondaryButtonCallback}>
          {secondaryButtonText}
        </SecondaryButton>
      </ButtonArea>
    }
  >
    {children}
  </ModalWithTitleAndButtons>
);

ModalWithTitleAndPrimaryAndSecondaryButtons.propTypes = {
  height: number, // this is only useful if we need a spinner in the same size popup !
  borderColor: string,
  title: string.isRequired,
  children: node.isRequired,
  primaryButtonText: string.isRequired,
  secondaryButtonText: string.isRequired,
  primaryButtonCallback: func.isRequired,
  secondaryButtonCallback: func.isRequired
};
