import styled from 'styled-components';

interface ContainerProps {
  myProps?: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  background: black;
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

  img{
    max-width: 200px;
    height: auto;
    margin: 0px;
  }

  h2{
    color: #fff;
    font-size: 20px;
  }
`; 


export const Result = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  h2 {
    color: #fff;
  }
`;
