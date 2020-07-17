import React from "react";
import { string, func, node } from "prop-types";
import {
  TitleText,
  TitleArea,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton
} from "./styled-components";
import { ModalWith3Sections } from "./modal-3-sections";

export const ModalWithTitleAndPrimaryAndSecondaryButtons = ({
  height,
  title,
  borderColor,
  middleSection,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonCallback,
  secondaryButtonCallback
}) => (
  <ModalWith3Sections
    height={height}
    borderColor={borderColor}
    topSection={
      <TitleArea>
        <TitleText>{title}</TitleText>
      </TitleArea>
    }
    middleSection={middleSection}
    bottomSection={
      <ButtonContainer>
        <PrimaryButton onClick={primaryButtonCallback}>
          {primaryButtonText}
        </PrimaryButton>
        <SecondaryButton onClick={secondaryButtonCallback}>
          {secondaryButtonText}
        </SecondaryButton>
      </ButtonContainer>
    }
  />
);

ModalWithTitleAndPrimaryAndSecondaryButtons.defaultProps = {
  height: "initial"
};
ModalWithTitleAndPrimaryAndSecondaryButtons.propTypes = {
  height: string,
  title: string.isRequired,
  middleSection: node.isRequired,
  primaryButtonText: string.isRequired,
  secondaryButtonText: string.isRequired,
  primaryButtonCallback: func.isRequired,
  secondaryButtonCallback: func.isRequired
};
