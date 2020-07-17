import React from "react";
import { Global } from "./global/global-styled-components";
import { ModalWithTitleAndPrimaryAndSecondaryButtons } from "./modals/modal-title-primary-secondary";
import { ModalWithTitleAndPrimaryButtonAndX } from "./modals/modal-title-primary-x";
import { ModalWithTitleAndX } from "./modals/modal-title-x";
import { ModalWithInput } from "./modals/modal-with-input";
import { PopupTable, PopupTableRow } from "./modals/popup-table";
import { ModalBackground, TextBlock } from "./modals/styled-components";
import { TitleText } from "./modals/styled-components";

export default function App() {
  return (
    <Global>
      <ModalBackground>
        <ModalWithTitleAndPrimaryAndSecondaryButtons
          borderColor="red"
          title="Delete Competitors"
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
          title="Delete Competitors"
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
          primaryButtonCallback={() => alert("primary button clicked !")}
          xCallback={() => alert("secondary button clicked !")}
        />
        <ModalWithTitleAndX
          titleAreaContent={
            <TitleText>
              <span style={{ fontWeight: "normal" }}>Header </span>
              <span>Title</span>
            </TitleText>
          }
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
