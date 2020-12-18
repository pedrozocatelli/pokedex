import styled from 'styled-components';

interface ContainerProps {
  bgColor?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  font-size: 85%;
  line-height: 12px;
  background: ${props => props.bgColor || 'white'};
  width: 70px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  & + & {
    margin-left: 5px;
  }

  span {
    text-transform: capitalize;
    font-weight: 550;
  }
`;
