import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  TopSection,
  ButtonContainer,
  PrimaryButton
} from "./styled-components";
import { ModalWith3Sections } from "./modal-3-sections";

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

export const ModalWithTitleAndPrimaryButtonAndX = ({
  height,
  title,
  middleSection,
  primaryButtonText
}) => (
  <ModalWith3Sections
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

ModalWithTitleAndPrimaryButtonAndX.defaultProps = {
  height: "initial"
};
ModalWithTitleAndPrimaryButtonAndX.propTypes = {
  height: string
};
