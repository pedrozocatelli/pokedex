import React from 'react';

import { Container, Title, RowContainer, Label } from './styles';

import { pokemonTypes } from '../../utils';

interface StatsProps {
  type?: Record<string, string>;
}

const Stats: React.FC<StatsProps> = ({ type }) => {
  return (
    <Container
      bgColor={
        pokemonTypes.find(
          (ty: Record<string, string>) => ty.type === type?.name,
        )?.color
      }
    >
      <Title
        secondaryBg={
          pokemonTypes.find(
            (ty: Record<string, string>) => ty.type === type?.name,
          )?.secondaryColor
        }
      >
        <span>Stat</span>
      </Title>
      <RowContainer bgColor="#ff5959">
        <Label>
          <div>HP:</div>
          <div>79</div>
        </Label>
      </RowContainer>
    </Container>
  );
};

export default Stats;
