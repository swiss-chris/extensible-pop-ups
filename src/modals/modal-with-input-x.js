import { func, string } from "prop-types";
import React, { useState } from "react";
import { ModalWithTitleAndPrimaryButtonAndX } from "./modal-title-primary-x";
import { ModalInput } from "./styled-components";

export const ModalWithInputAndX = ({
  height,
  title,
  placeholder,
  primaryButtonText,
  primaryButtonCallback,
  xCallback
}) => {
  const [name, setName] = useState("");

  return (
    <ModalWithTitleAndPrimaryButtonAndX
      height={height}
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
      primaryButtonCallback={() => primaryButtonCallback(name)}
      xCallback={xCallback}
    />
  );
};

ModalWithInputAndX.defaultProps = {
  height: "initial"
};
ModalWithInputAndX.propTypes = {
  height: string,
  title: string.isRequired,
  placeholder: string.isRequired,
  primaryButtonText: string.isRequired,
  secondaryButtonText: string.isRequired,
  primaryButtonCallback: func.isRequired,
  xCallback: func.isRequired
};
