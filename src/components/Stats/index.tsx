import React, { useState, useEffect } from 'react';

import { Container, Title, RowContainer, Label } from './styles';

import { pokemonTypes } from '../../utils';

interface StatsProps {
  pokemon: Record<string, any>;
}

const Stats: React.FC<StatsProps> = ({ pokemon }) => {
  const [primaryType, setPrimaryType] = useState<Record<string, any>>([]);
  const [secondaryType, setSecondaryType] = useState<Record<string, any>>([]);

  useEffect(() => {
    if (pokemon) {
      const types = pokemon.types.map((ty: Record<string, string>) => ty.type);
      setPrimaryType(types[0]);
      setSecondaryType(types.length > 1 ? types[1] : types[0]);
    }
  }, [pokemon]);

  return (
    <Container
      bgColor={
        pokemonTypes.find(
          (ty: Record<string, string>) => ty.type === primaryType?.name,
        )?.color
      }
      borderColor={
        pokemonTypes.find(
          (ty: Record<string, string>) => ty.type === secondaryType?.name,
        )?.color
      }
    >
      <Title
        secondaryBg={
          pokemonTypes.find(
            (ty: Record<string, string>) => ty.type === primaryType?.name,
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
      <RowContainer bgColor="#F5AC78">
        <Label>
          <div>Attack:</div>
          <div>79</div>
        </Label>
      </RowContainer>
      <RowContainer bgColor="#FAE078">
        <Label>
          <div>Defense:</div>
          <div>79</div>
        </Label>
      </RowContainer>
      <RowContainer bgColor="#9DB7F5">
        <Label>
          <div>Sp. Atk:</div>
          <div>79</div>
        </Label>
      </RowContainer>
      <RowContainer bgColor="#A7DB8D">
        <Label>
          <div>Sp. Def:</div>
          <div>79</div>
        </Label>
      </RowContainer>
      <RowContainer bgColor="#FA92B2">
        <Label>
          <div>Sp. Def:</div>
          <div>250</div>
        </Label>
      </RowContainer>
    </Container>
  );
};

export default Stats;
