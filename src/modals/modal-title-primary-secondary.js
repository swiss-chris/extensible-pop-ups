import React from "react";
import { string, node } from "prop-types";
import {
  Title,
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
  secondaryButtonText
}) => (
  <ModalWith3Sections
    height={height}
    borderColor={borderColor}
    topSection={<Title>{title}</Title>}
    middleSection={middleSection}
    bottomSection={
      <ButtonContainer>
        <PrimaryButton>{primaryButtonText}</PrimaryButton>
        <SecondaryButton>{secondaryButtonText}</SecondaryButton>
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
  primaryButtonText: string,
  secondaryButtonText: string
};
