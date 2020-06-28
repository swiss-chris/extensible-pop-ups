import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  ModalContent,
  TopSection,
  MiddleSection,
  BottomSection,
  Title,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton
} from "./styled-components";

export const TopSectionWithX = styled(TopSection)`
  display: flex;
  justify-content: space-between;
`;

export const TitleComponent = ({ topSection }) => (
  <TopSectionWithX>
    {topSection}
    <FontAwesomeIcon icon={faTimes} color="#246399" />
  </TopSectionWithX>
);

export const Modal = ({ height, topSection, middleSection, bottomSection }) => (
  <ModalContent height={height}>
    <TopSection>{topSection}</TopSection>
    <MiddleSection>{middleSection}</MiddleSection>
    <BottomSection>{bottomSection}</BottomSection>
  </ModalContent>
);

export const ModalWithTitleAndPrimaryAndSecondaryButtons = ({
  height,
  title,
  middleSection,
  primaryButtonText,
  secondaryButtonText
}) => (
  <Modal
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

export const ModalWithTitleAndPrimaryButtonAndX = ({
  height,
  title,
  middleSection,
  primaryButtonText,
  secondaryButtonText
}) => (
  <Modal
    height={height}
    topSection={<TitleComponent>{title}</TitleComponent>}
    middleSection={middleSection}
    bottomSection={
      <ButtonContainer>
        <PrimaryButton>{primaryButtonText}</PrimaryButton>
      </ButtonContainer>
    }
  />
);

Modal.defaultProps = {
  height: "initial"
};
Modal.propTypes = {
  height: string
};

ModalWithTitleAndPrimaryAndSecondaryButtons.defaultProps = {
  height: "initial"
};
ModalWithTitleAndPrimaryAndSecondaryButtons.propTypes = {
  height: string
};
