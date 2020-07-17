import React from "react";
import styled from "styled-components";
import { node, func } from "prop-types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleArea } from "./styled-components";

const FontAwesomeIconWithHeight = styled(FontAwesomeIcon)`
  height: 22px;
`;

const StyledTitleWithX = styled(TitleArea)`
  display: flex;
  justify-content: space-between;
`;

export const TitleAreaWithX = ({ titleArea, xCallback }) => (
  <StyledTitleWithX>
    {titleArea}
    <FontAwesomeIconWithHeight
      height="22px"
      icon={faTimes}
      color="#246399"
      onClick={xCallback}
    />
  </StyledTitleWithX>
);

TitleAreaWithX.propTypes = {
  titleArea: node.isRequired,
  xCallback: func.isRequired
};
