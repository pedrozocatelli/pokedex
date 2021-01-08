import React, { useState, useEffect, useCallback, useMemo } from 'react';

import { Container, Title, RowContainer, Label, Bar } from './styles';

import { pokemonTypes, pokemonStats } from '../../utils';

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

  const total = useMemo(() => {
    if (pokemon) {
      return pokemon.stats.reduce(
        (n: number, { base_stat }: any) => n + base_stat,
        0,
      );
    }
  }, [pokemon]);

  const renderStats = useCallback(() => {
    if (pokemon) {
      return pokemon.stats.map((sta: Record<string, any>) => (
        <RowContainer
          bgColor={
            pokemonStats.find(
              (ty: Record<string, string>) => ty.name === sta.stat?.name,
            )?.color
          }
        >
          <Label>
            <div>
              {
                pokemonStats.find(
                  (ty: Record<string, string>) => ty.name === sta.stat?.name,
                )?.label
              }
              :
            </div>
            <div>{sta.base_stat}</div>
          </Label>
          <Bar
            barColor={
              pokemonStats.find(
                (ty: Record<string, string>) => ty.name === sta.stat?.name,
              )?.background
            }
            borderColor={
              pokemonStats.find(
                (ty: Record<string, string>) => ty.name === sta.stat?.name,
              )?.border
            }
            statusValue={sta.base_stat}
          />
        </RowContainer>
      ));
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
        primaryType === secondaryType
          ? pokemonTypes.find(
              (ty: Record<string, string>) => ty.type === secondaryType?.name,
            )?.tertiaryColor
          : pokemonTypes.find(
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
      {renderStats()}
      <RowContainer
        bgColor={
          pokemonTypes.find(
            (ty: Record<string, string>) => ty.type === primaryType?.name,
          )?.secondaryColor
        }
      >
        <Label>
          <div>Total:</div>
          <div>{total}</div>
        </Label>
      </RowContainer>
    </Container>
  );
};

export default Stats;
