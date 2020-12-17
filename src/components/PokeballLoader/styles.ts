import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  myProps?: boolean;
};

const frames = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50% ;
  position: relative;
  overflow: hidden;
  border: 3px solid black;
  animation: ${frames} .8s  linear 0s infinite;

  &:before{
    content: '';
    position: absolute;
    background-color: #fff;
    width: 16px;
    height:16px;
    border: 4px solid black;
    border-radius: 50%;
    bottom: 20px;
    right: 19px;
    z-index: 1;
  }

  &:after{
    content: '';
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid black;
    top: -4px
  }
`;
