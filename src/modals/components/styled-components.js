import { number, string } from "prop-types";
import styled from "styled-components";
import { StyledInput } from "../../global/global-styled-components";

export const ModalBackground = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.2); /* Black w/ opacity */
`;

export const StyledModal = styled.div`
  margin: 5px auto;
  height: ${props => (props.height ? `${props.height}px` : "initial")};
  width: ${props => props.width || "400"}px;
  border: 1px solid ${props => props.borderColor || "white"};
  border-radius: 10px;
  background-color: white;
  padding: 9px 19px 19px 19px;
  display: flex;
  flex-direction: column;
  color: rgb(65, 65, 65);
`;
StyledModal.propTypes = {
  height: number,
  width: number,
  borderColor: string
};

// Spacers

export const Spacer = styled.div`
  height: ${props => props.height || 10}px;
`;
Spacer.propTypes = {
  height: number
};

// Section Content

export const TitleArea = styled.div`
  height: 31px;
  line-height: 22px;
  padding-bottom: 8px;
  border-bottom: 1px solid #d2d2d2;
  font-size: ${props => (props.fontSize ? props.fontSize : 16)}px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "bold")};
`;
TitleArea.propTypes = {
  fontSize: number,
  fontWeight: number
};

export const TextBlock = styled.div`
  height: ${props => (props.height ? `${props.height}px` : "initial")};
`;
TextBlock.propTypes = {
  height: number
};

export const ModalInput = styled(StyledInput)`
  height: 40px;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  margin-top: 5px;
  font-weight: normal;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  border: 0px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: rgb(36, 99, 153);
  outline: none;
  background-color: white;
`;

export const PrimaryButton = styled(Button)`
  background-color: #ebf5ff;

  &:hover {
    background-color: #cee2f5;
  }

  &:active {
    background-color: #a8c5e2;
  }
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #24619a;
  margin-left: 10px;

  &:hover {
    border-color: #78b2e9;
  }

  &:active {
    border-color: rgb(16, 58, 98);
  }
`;
