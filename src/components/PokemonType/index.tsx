import React from 'react';

import { Container } from './styles';
import { pokemonTypes } from '../../utils';

interface PokemonTypeProps {
  type?: string;
}

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  return (
    <Container
      bgColor={
        pokemonTypes.find((ty: Record<string, string>) => ty.type === type)
          ?.color
      }
    >
      <span>{type}</span>
    </Container>
  );
};

export default PokemonType;
