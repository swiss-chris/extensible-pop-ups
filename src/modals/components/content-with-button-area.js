import { node } from "prop-types";
import React from "react";
import { Spacer } from "./styled-components";

export const ContentWithButtonArea = ({ children, buttonArea }) => (
  <>
    {children}
    <Spacer height={24} />
    {buttonArea}
  </>
);

ContentWithButtonArea.propTypes = {
  children: node.isRequired,
  buttonArea: node.isRequired
};
