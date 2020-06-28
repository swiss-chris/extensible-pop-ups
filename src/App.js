import React from "react";
import "./styles.css";
import styled from "styled-components";
import {
  ModalBackground,
  TextBlock,
  PopupInput
} from "./modals/styled-components";
import { ModalWithTitleAndPrimaryAndSecondaryButtons } from "./modals/modal-title-primary-secondary";
import { ModalWithTitleAndPrimaryButtonAndX } from "./modals/modal-title-primary-x";
import { ModalWithTitleAndX } from "./modals/modal-title-x";
import { PopupTable, PopupTableRow } from "./popup-table";

const Global = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  color: rgb(65, 65, 65);
  padding: 0;
  margin: 0;

  p {
    padding: 0;
    margin: 0;
  }

  box-sizing: border-box;
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

export default function App() {
  return (
    <Global>
      <ModalBackground>
        <ModalWithTitleAndPrimaryAndSecondaryButtons
          title="Header Title"
          middleSection={
            <TextBlock height="95px">
              <p>
                These competitor/s will be removed from the ignored competitors
                group and will now appear across the application.
              </p>
              <p>{"\u00A0"}</p>
              <p>Are you sure you want to perform this action?</p>
            </TextBlock>
          }
          primaryButtonText="Okay"
          secondaryButtonText="Cancel"
        />
        <ModalWithTitleAndPrimaryAndSecondaryButtons
          title="Header Title"
          middleSection={<PopupInput placeholder="Enter Filter name" />}
          primaryButtonText="Save"
          secondaryButtonText="Cancel"
        />
        <ModalWithTitleAndPrimaryButtonAndX
          title="Header Title"
          middleSection={<PopupInput placeholder="Enter Filter name" />}
          primaryButtonText="Save"
          secondaryButtonText="Cancel"
        />
        <ModalWithTitleAndX title="Header Title">
          <PopupTable>
            <PopupTableRow />
            <PopupTableRow />
            <PopupTableRow />
          </PopupTable>
        </ModalWithTitleAndX>
      </ModalBackground>
    </Global>
  );
}
