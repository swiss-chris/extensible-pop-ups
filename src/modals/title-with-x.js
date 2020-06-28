import React from "react";
import styled from "styled-components";
import { string, func } from "prop-types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title } from "./styled-components";

const FontAwesomeIconWithHeight = styled(FontAwesomeIcon)`
  height: 22px;
`;

const StyledTitleWithX = styled(Title)`
  display: flex;
  justify-content: space-between;
`;

export const TitleWithX = ({ title, xCallback }) => (
  <StyledTitleWithX>
    {title}
    <FontAwesomeIconWithHeight
      height="22px"
      icon={faTimes}
      color="#246399"
      onClick={xCallback}
    />
  </StyledTitleWithX>
);

TitleWithX.propTypes = {
  title: string.isRequired,
  xCallback: func.isRequired
};
