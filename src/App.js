import React from "react";
import { ModalWithTitleAndPrimaryAndSecondaryButtons } from "./modals/modal-title-primary-secondary";
import { ModalWithTitleAndX } from "./modals/modal-title-x";
import { ModalWithInputAndSecondaryButton } from "./modals/modal-with-input-sec-button";
import { ModalWithInputAndX } from "./modals/modal-with-input-x";
import { ModalBackground, TextBlock } from "./modals/styled-components";
import { PopupTable, PopupTableRow } from "./modals/popup-table";
import { Global } from "./global/global-styled-components";

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
        <ModalWithInputAndSecondaryButton
          title="Create saved filter"
          placeholder="Enter Filter name"
          primaryButtonText="Save"
          secondaryButtonText="Cancel"
          primaryButtonCallback={filter =>
            alert(`And the filter name is ... '${filter}'`)
          }
          secondaryButtonCallback={() => alert("secondary button clicked !")}
        />
        <ModalWithInputAndX
          title="Create Saved Filter"
          placeholder="Enter Filter name"
          primaryButtonText="Save"
          primaryButtonCallback={filter =>
            alert(`And the filter name is ... '${filter}'`)
          }
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
