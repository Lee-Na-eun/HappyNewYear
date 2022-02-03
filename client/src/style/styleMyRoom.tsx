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
      :hover {
        margin-top: -10px;
        margin-bottom: 10px;
        transition: 0.2s;
      }
      > a {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        color: #878bbe;
        @media (max-width: 420px) {
          font-size: 10px;
        }
        > .planIcon {
          font-size: 45px;
          display: block;
          color: #878bbe;
          margin-bottom: 15px;
          @media (max-width: 420px) {
            font-size: 30px;
          }
        }
      }
    }
    @media (max-width: 420px) {
      grid-template-columns: 100px 100px;
      grid-template-rows: 100px 100px;
      row-gap: 10px;
      column-gap: 10px;
    }
  }
`;
