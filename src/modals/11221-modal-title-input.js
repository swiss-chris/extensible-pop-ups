import { func, number, string } from "prop-types";
import React, { useState } from "react";
import { ModalWithTitleAndPrimaryAndSecondaryButtons } from "./1122-modal-title-2-buttons";
import { ModalInput } from "./components/styled-components";

export const ModalWithTitleAndInput = ({
  height,
  title,
  placeholder,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonCallback,
  secondaryButtonCallback
}) => {
  const [name, setName] = useState("");

  return (
    <ModalWithTitleAndPrimaryAndSecondaryButtons
      height={height}
      title={title}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      primaryButtonCallback={() => primaryButtonCallback(name)}
      secondaryButtonCallback={secondaryButtonCallback}
    >
      <ModalInput
        onChange={e => {
          setName(e.target.value);
        }}
        placeholder={placeholder}
        value={name}
      />
    </ModalWithTitleAndPrimaryAndSecondaryButtons>
  );
};

ModalWithTitleAndInput.propTypes = {
  height: number, // this is only useful if we need a spinner in the same size popup !
  title: string.isRequired,
  placeholder: string.isRequired,
  primaryButtonText: string.isRequired,
  secondaryButtonText: string.isRequired,
  primaryButtonCallback: func.isRequired,
  secondaryButtonCallback: func.isRequired
};
