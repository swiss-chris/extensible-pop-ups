import React from "react";
import { string } from "prop-types";
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
  middleSection,
  primaryButtonText,
  secondaryButtonText
}) => (
  <ModalWith3Sections
    height={height}
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
  height: string
};
