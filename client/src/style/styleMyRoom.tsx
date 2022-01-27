import styled, { keyframes } from 'styled-components';

export const MyRoomWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MyPlanWrap = styled.div`
  > ul {
    display: grid;
    grid-template-columns: 180px 180px;
    grid-template-rows: 180px 180px;
    row-gap: 20px;
    column-gap: 20px;
    > li {
      border-radius: 20px;
      background-color: #fff;
    }
    @media (max-width: 420px) {
      grid-template-columns: 100px 100px;
      grid-template-rows: 100px 100px;
      row-gap: 10px;
      column-gap: 10px;
    }
  }
`;
