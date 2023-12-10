import {JSX} from 'react';
import {FilmType} from '../../../types/film-type';
import {Player} from '../../../components/player/player';

type PlayerProps = {
  films: FilmType[];
}

export function PlayerPage({films}: PlayerProps): JSX.Element {
  return(
    <Player films={films}></Player>
  );
}
