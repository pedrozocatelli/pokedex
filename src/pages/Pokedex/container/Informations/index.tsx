/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

import { Container, Title, TypeRow } from './styles';

import PokemonType from '../../../../components/PokemonType';
import Stats from '../../../../components/Stats';

interface InformationsProps {
  pokemon: Record<string, any>;
}

const Informations: React.FC<InformationsProps> = ({ pokemon }) => {
  const [typeList, setTypeList] = useState([]);

  useEffect(() => {
    if (pokemon.name) {
      setTypeList(pokemon.types.map((ty: Record<string, string>) => ty.type));
    }
  }, [pokemon]);
  return (
    <Container>
      {pokemon.name && (
        <>
          <Title>
            <h2>
              #{pokemon.id} - {pokemon.name}
            </h2>
          </Title>
          <TypeRow size={typeList.length}>
            {typeList.map((ty: Record<string, string>) => (
              <PokemonType type={ty.name} />
            ))}
          </TypeRow>
          <Stats type={typeList[0]}>Olá</Stats>
        </>
      )}
    </Container>
  );
};

export default Informations;
