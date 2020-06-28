import styled from "styled-components";

export const Global = styled.div`
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

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 11px 12px 10px 12px;
  font-size: 14px;
  color: #2b2b2b;
  line-height: 1.42857;
  background-color: #fff;
  border: none;
  cursor: text;
  outline: none;
  ::placeholder {
    opacity: 0.3;
    color: #333;
  }
`;
