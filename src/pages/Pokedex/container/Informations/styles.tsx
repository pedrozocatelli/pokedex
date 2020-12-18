import styled from 'styled-components';

interface ContainerProps {
  myProps?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;

  h2 {
    margin: 0px;
    text-transform: capitalize;
    color: #fff;
    font-weight: bold;
  }
`;

interface TypeRowInterface {
  size: number;
}

export const TypeRow = styled.div<TypeRowInterface>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
