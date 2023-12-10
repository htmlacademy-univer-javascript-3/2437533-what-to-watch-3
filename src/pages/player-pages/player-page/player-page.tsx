import {JSX} from 'react';
import {Player} from '../../../components/player/player';
import {useAppSelector} from '../../../hooks';


export function PlayerPage(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  return(
    <Player films={films}></Player>
  );
}
