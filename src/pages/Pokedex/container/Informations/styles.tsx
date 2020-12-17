import styled from 'styled-components';

interface ContainerProps {
  myProps?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 10px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  h2 {
    margin: 0px;
    text-transform: capitalize;
    color: #fff;
  }
`;

export const PokeType = styled.div`
  flex: 1;
`;
