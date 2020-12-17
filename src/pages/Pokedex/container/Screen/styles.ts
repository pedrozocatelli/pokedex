import styled from 'styled-components';

interface ContainerProps {
  myProps?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  background: #333;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    max-width: 200px;
    height: auto;
    margin: 0px;
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  > img {
    height: auto;
    min-width: 250px;
    margin: 0px;
  }

  @media (max-width: 1366px) {
    > img {
      height: auto;
      min-width: 200px;
      margin: 0px;
    }
  }
`;
