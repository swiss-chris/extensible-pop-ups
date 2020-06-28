import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ButtonContainer, PrimaryButton, Title } from "./styled-components";
import { ModalWith3Sections } from "./modal-3-sections";

const FontAwesomeIconWithHeight = styled(FontAwesomeIcon)`
  height: 22px;
`;

const TitleWithX = styled(Title)`
  display: flex;
  justify-content: space-between;
`;

export const ModalWithTitleAndPrimaryButtonAndX = ({
  height,
  title,
  middleSection,
  primaryButtonText
}) => (
  <ModalWith3Sections
    height={height}
    topSection={
      <TitleWithX>
        {title}
        <FontAwesomeIconWithHeight
          height="22px"
          icon={faTimes}
          color="#246399"
        />
      </TitleWithX>
    }
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
