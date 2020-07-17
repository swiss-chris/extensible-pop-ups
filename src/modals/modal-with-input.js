import React, { useState } from "react";
import { string, func } from "prop-types";
import { ModalWithTitleAndPrimaryAndSecondaryButtons } from "./modal-title-primary-secondary";
import { ModalInput } from "./styled-components";

export const ModalWithInput = ({
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
      title={title}
      middleSection={
        <ModalInput
          onChange={e => {
            setName(e.target.value);
          }}
          placeholder={placeholder}
          value={name}
        />
      }
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      primaryButtonCallback={() => primaryButtonCallback(name)}
      secondaryButtonCallback={secondaryButtonCallback}
    />
  );
};

ModalWithInput.defaultProps = {
  height: "initial"
};
ModalWithInput.propTypes = {
  height: string,
  title: string.isRequired,
  placeholder: string.isRequired,
  primaryButtonText: string.isRequired,
  secondaryButtonText: string.isRequired,
  primaryButtonCallback: func.isRequired,
  secondaryButtonCallback: func.isRequired
};
