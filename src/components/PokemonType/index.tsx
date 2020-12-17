import React from 'react';

import { Container } from './styles';

interface PokemonTypeProps {
  myProps?: boolean;
}

const PokemonType: React.FC<PokemonTypeProps> = () => {
  return (
    <Container>
      <h1>Hello - PokemonType</h1>
    </Container>
  );
};

export default PokemonType;
