import React from "react";
import "./styles.css";
import styled from "styled-components";
import {
  ModalBackground,
  TextBlock,
  ModalInput
} from "./modals/styled-components";
import { ModalWithTitleAndPrimaryAndSecondaryButtons } from "./modals/modal-title-primary-secondary";
import { ModalWithTitleAndPrimaryButtonAndX } from "./modals/modal-title-primary-x";
import { ModalWithTitleAndX } from "./modals/modal-title-x";
import { PopupTable, PopupTableRow } from "./popup-table";
import { ModalWithInput } from "./modals/modal-with-input";

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
          title="Delete Competitors"
          borderColor="red"
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
          primaryButtonCallback={() => alert("primary button clicked !")}
          secondaryButtonCallback={() => alert("secondary button clicked !")}
        />
        <ModalWithInput
          title="Create saved filter"
          placeholder="Enter Filter name"
          primaryButtonText="Save"
          secondaryButtonText="Cancel"
          primaryButtonCallback={filter =>
            alert(`And the filter name is ... '${filter}'`)
          }
          secondaryButtonCallback={() => alert("secondary button clicked !")}
        />
        <ModalWithTitleAndPrimaryButtonAndX
          title="Create Saved Filter"
          middleSection={<ModalInput placeholder="Enter Filter name" />}
          primaryButtonText="Save"
          xCallback={() => alert("x clicked !")}
        />
        <ModalWithTitleAndX
          title="Header Title"
          xCallback={() => alert("x clicked !")}
        >
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
