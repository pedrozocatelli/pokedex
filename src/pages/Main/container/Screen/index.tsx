import React from 'react';

import { Container, ErrorContainer, Result } from './styles';

import PokeballLoader from '../../../../components/PokeballLoader';
import NotFound from '../../../../assets/images/notfound.jpg';

interface ScreenProps {
  loading?: boolean;
  error?: boolean;
  pokemon: Record<string, any>;
}

const Screen: React.FC<ScreenProps> = ({ loading, error, pokemon }) => {
  return (
    <Container>
      {pokemon?.name && (
        <Result>
          <img alt="pokemon" src={pokemon.sprites.front_default} />
        </Result>
      )}
      {loading && <PokeballLoader />}
      {error && !loading && (
        <ErrorContainer>
          <img src={NotFound} alt="not-found" />
          <h2>Pokémon not found</h2>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default Screen;
