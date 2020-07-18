import React from "react";
import { Global } from "./global/global-styled-components";
import { ModalWithTitleAndPrimaryAndSecondaryButtons } from "./modals/modal-title-primary-secondary";
import { ModalWithTitleAndPrimaryButtonAndX } from "./modals/modal-title-primary-x";
import { ModalWithTitleAndX } from "./modals/modal-title-x";
import { ModalWithInput } from "./modals/modal-with-input";
import { PopupTable, PopupTableRow } from "./modals/popup-table";
import { ModalBackground, TextBlock, Text } from "./modals/styled-components";
import { TitleText } from "./modals/styled-components";

export default function App() {
  return (
    <Global>
      <ModalBackground>
        <ModalWithTitleAndX
          width={670}
          titleAreaContent={
            <TitleText>
              <span style={{ fontWeight: "normal" }}>
                50 Locations applied to{" "}
              </span>
              <span>Brand Terms </span>
            </TitleText>
          }
          xCallback={() => alert("x clicked !")}
        >
          <div
            style={{
              width: "670px",
              height: "300px",
              overflowX: "hidden"
            }}
          >
            <ul
              style={{
                columnCount: "2",
                columnWidth: "300px",
                listStyleType: "none"
              }}
            >
              <li>Alabama</li>
              <li>Alaska</li>
              <li>Arizona</li>
              <li>Arkansas</li>
              <li>California</li>
              <li>Colorado</li>
              <li>Connecticut</li>
              <li>Delaware</li>
              <li>Florida</li>
              <li>Georgia</li>
              <li>Hawaii</li>
              <li>Idaho</li>
              <li>Illinois</li>
              <li>Indiana</li>
              <li>Iowa</li>
              <li>Kansas</li>
              <li>Kentucky</li>
              <li>Louisiana</li>
              <li>Maine</li>
              <li>Maryland</li>
              <li>Massachusetts</li>
              <li>Michigan</li>
              <li>Minnesota</li>
              <li>Mississippi</li>
              <li>Missouri</li>
              <li>Montana</li>
              <li>Nebraska</li>
              <li>Nevada</li>
              <li>New Hampshire</li>
              <li>New Jersey</li>
              <li>New Mexico</li>
              <li>New York</li>
              <li>North Carolina</li>
              <li>North Dakota</li>
              <li>Ohio</li>
              <li>Oklahoma</li>
              <li>Oregon</li>
              <li>Pennsylvania</li>
              <li>Rhode Island</li>
              <li>South Carolina</li>
              <li>South Dakota</li>
              <li>Tennessee</li>
              <li>Texas</li>
              <li>Utah</li>
              <li>Vermont</li>
              <li>Virginia</li>
              <li>Washington</li>
              <li>West Virginia</li>
              <li>Wisconsin</li>
              <li>Wyoming</li>
            </ul>
          </div>
        </ModalWithTitleAndX>
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
              <span style={{ fontWeight: "normal" }}>Different Title </span>
              <span>Normal Title </span>
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
