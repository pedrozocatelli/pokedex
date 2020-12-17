import React, { useState } from 'react';

import { Container, Title, PokeType } from './styles';

interface InformationsProps {
  pokemon: Record<string, any>;
}

const Informations: React.FC<InformationsProps> = ({ pokemon }) => {
  const [a, setA] = useState('');

  return (
    <Container>
      {pokemon.name && (
        <Title>
          <h2>
            #{pokemon.id} - {pokemon.name}
          </h2>
        </Title>
      )}
      <PokeType />
    </Container>
  );
};

export default Informations;
