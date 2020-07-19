import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { func, node } from "prop-types";
import React from "react";
import styled from "styled-components";
import { TitleArea } from "./styled-components";

const FontAwesomeIconWithHeight = styled(FontAwesomeIcon)`
  height: 22px;
  font-size: 16px;
`;

const StyledTitleAreaWithX = styled(TitleArea)`
  display: flex;
  justify-content: space-between;
`;

export const TitleAreaWithX = ({ title, xCallback }) => (
  <StyledTitleAreaWithX>
    <div>{title}</div>
    <FontAwesomeIconWithHeight
      height="22px"
      icon={faTimes}
      color="#246399"
      onClick={xCallback}
    />
  </StyledTitleAreaWithX>
);

TitleAreaWithX.propTypes = {
  title: node.isRequired,
  xCallback: func.isRequired
};
