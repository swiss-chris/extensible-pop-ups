import styled from "styled-components";
import { StyledInput } from "../general/general-styled-components";

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

export const ModalContent = styled.div`
  margin: 5px auto;
  height: ${props => props.height || "initial"};
  width: 400px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
  padding: 9px 19px 19px;
  display: flex;
  flex-direction: column;
  color: rgb(65, 65, 65);
`;

// Sections

export const TopSection = styled.div``;

export const MiddleSection = styled.div`
  /* flex-grow: 1; */
  padding-top: 15px;
  padding-bottom: 24px;
`;

export const BottomSection = styled.div`
  height: 40px;
`;

// Section Content

export const Title = styled.div`
  height: 31px;
  line-height: 22px;
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #d2d2d2;
`;

export const TextBlock = styled.div`
  height: ${props => props.height || "initial"};
`;

export const PopupInput = styled(StyledInput)`
  height: 40px;
  border: 1px solid #d2d2d2;
  border-radius: 2px;
  margin-top: 5px;
  font-weight: normal;
`;

export const ButtonContainer = styled.div`
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
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #24619a;
  margin-left: 10px;
`;
