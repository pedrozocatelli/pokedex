import styled from 'styled-components';

import { darken } from 'polished';

interface StatsInterface {
  bgColor?: string;
  secondaryBg?: string;
}

export const Container = styled.div<StatsInterface>`
  background: ${props => props.bgColor || 'white'};
  border: 3px solid
    ${props => (props.bgColor && darken(0.3, props.bgColor)) || 'white'};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-top: 20px;
  padding: 3px;

  span {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Title = styled.div<StatsInterface>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.secondaryBg || 'white'};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 3px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  width: 40%;

  div:first-child {
    display: flex;
    justify-content: center;
    width: 70px;
  }

  div {
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }
`;

interface RowContainerProps {
  bgColor?: string;
}

export const RowContainer = styled.div<RowContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  background: ${props => (props.bgColor ? props.bgColor : 'white')};
  margin: 5px 0px;
`;
