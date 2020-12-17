import React, { useState, useCallback } from 'react';
import { Tooltip, Input } from 'antd';
import api from '../../services/api';

import { Container, Content, Frame, RowSearch, ButtonSearch } from './styles';

import Logo from '../../assets/images/dex.png';

import Screen from './container/Screen';
import Informations from './container/Informations';

const Pokedex: React.FC = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const searchPokemon = useCallback(async () => {
    if (!search) {
      return;
    }
    setLoading(true);
    setPokemon({});
    setError(false);
    try {
      const response = await api.get(`/pokemon/${search.toLocaleLowerCase()}`);
      setPokemon(response.data);
      console.log(response.data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }, [search]);

  return (
    <Container>
      <Content>
        <RowSearch>
          <Input
            placeholder="Type the name of the pokémon"
            value={search}
            onChange={e => setSearch(e.target.value)}
            allowClear
          />
          <Tooltip title="Search">
            <ButtonSearch onClick={() => searchPokemon()} disabled={loading}>
              <img alt="pokedex" src={Logo} />
            </ButtonSearch>
          </Tooltip>
        </RowSearch>
        <Frame>
          <Screen error={error} loading={loading} pokemon={pokemon} />
        </Frame>
        <Informations pokemon={pokemon} />
      </Content>
    </Container>
  );
};

export default Pokedex;
