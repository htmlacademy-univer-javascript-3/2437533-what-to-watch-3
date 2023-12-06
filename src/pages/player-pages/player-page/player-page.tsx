import {JSX} from 'react';
import {Film} from '../../../types/film-type';
import {Player} from '../../../components/player/player';

type PlayerProps = {
  films: Film[];
}

export function PlayerPage({films}: PlayerProps): JSX.Element {
  return(
    <Player films={films}></Player>
  );
}
