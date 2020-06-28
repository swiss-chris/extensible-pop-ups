import { string, node } from "prop-types";
import React from "react";
import { ModalWith3Sections } from "./modal-3-sections";
import { ButtonContainer, PrimaryButton } from "./styled-components";
import { TitleWithX } from "./title-with-x";

export const ModalWithTitleAndPrimaryButtonAndX = ({
  height,
  title,
  middleSection,
  primaryButtonText
}) => (
  <ModalWith3Sections
    height={height}
    topSection={<TitleWithX title={title} />}
    middleSection={middleSection}
    bottomSection={
      <ButtonContainer>
        <PrimaryButton>{primaryButtonText}</PrimaryButton>
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
  primaryButtonText: string.isRequired
};
