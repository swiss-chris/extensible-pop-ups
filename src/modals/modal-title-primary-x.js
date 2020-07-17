import { string, func, node } from "prop-types";
import React from "react";
import { ModalWith3Sections } from "./modal-3-sections";
import { ButtonContainer, PrimaryButton, TitleText } from "./styled-components";
import { TitleAreaWithX } from "./title-with-x";

export const ModalWithTitleAndPrimaryButtonAndX = ({
  height,
  borderColor,
  title,
  middleSection,
  primaryButtonText,
  primaryButtonCallback,
  xCallback
}) => (
  <ModalWith3Sections
    height={height}
    borderColor={borderColor}
    topSection={
      <TitleAreaWithX
        titleArea={<TitleText>{title}</TitleText>}
        xCallback={xCallback}
      />
    }
    middleSection={middleSection}
    bottomSection={
      <ButtonContainer>
        <PrimaryButton onClick={primaryButtonCallback}>
          {primaryButtonText}
        </PrimaryButton>
      </ButtonContainer>
    }
  />
);

ModalWithTitleAndPrimaryButtonAndX.defaultProps = {
  height: "initial"
};
ModalWithTitleAndPrimaryButtonAndX.propTypes = {
  height: string,
  title: string.isRequired,
  middleSection: node.isRequired,
  primaryButtonText: string.isRequired,
  primaryButtonCallback: func.isRequired,
  xCallback: func.isRequired
};
