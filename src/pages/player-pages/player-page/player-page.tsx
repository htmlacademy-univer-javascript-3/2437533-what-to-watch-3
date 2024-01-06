import {JSX, useEffect} from 'react';
import {Player} from '../../../components/player/player';
import {useParams} from 'react-router-dom';
import {
  fetchCurrentFilmAction
} from '../../../store/api-actions';
import {useAppDispatch} from '../../../hooks';


export function PlayerPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentFilmAction(id));
    }
  }, [dispatch, id]);


  return(
    <Player></Player>
  );
}
