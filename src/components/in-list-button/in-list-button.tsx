import {useAppDispatch, useAppSelector} from '../../hooks';
import {removeFilmFromFavorites} from '../../store/api-actions';
import {AuthorizationStatus} from '../../consts/authorization';


type InListButtonProps = {
  id: string;
};


export function InListButton({id}: InListButtonProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const favoriteFilmsCnt = useAppSelector((state) => state.favoriteFilms.length);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(removeFilmFromFavorites(id));
  };

  return(
    <button className="btn btn--list film-card__button" type="button" onClick={handleSubmit}>
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
      <span>My list</span>
      {authStatus === AuthorizationStatus.Auth && (<span className="film-card__count">{favoriteFilmsCnt}</span>)}
    </button>
  );
}
