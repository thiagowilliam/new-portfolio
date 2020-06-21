import styled from 'styled-components';
import { darken } from 'polished';

import Background from '../../assets/images/bg-home.png';

export const Container = styled.section`
  height: 100vh;
  min-height: 640px;
  background: url(${Background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;

  h1 {
    font-size: 70px;
    color: #fcfcfc;
    font-weight: 400;
    margin-bottom: 32px;
    text-align: center;
    @media (max-width: 650px) {
      font-size: 55px;
    }
    span {
      font-weight: 700;
    }
  }

  p {
    font-size: 22px;
    color: #fcfcfc;
    max-width: 80%;
    text-align: center;
    line-height: 26px;
    font-weight: 400;
    margin-bottom: 32px;
    @media (max-width: 650px) {
      font-size: 20px;
    }
    strong {
      font-weight: 700;
    }
  }

  a {
    color: #fcfcfc;
    border: 0;
    background: #57d131;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 18px;
    border-radius: 5px;
    padding: 13px 20px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      background: ${darken(0.1, '#57d131')};
    }
  }
`;
