import { css } from "styled-components";

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const flexColumnLeft = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const flexEvenly = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
