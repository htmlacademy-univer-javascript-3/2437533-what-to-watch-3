import {useAppDispatch, useAppSelector} from '../../hooks';
import {addFilmToFavorites} from '../../store/api-actions';
import {AuthorizationStatus} from '../../consts/authorization';
import {redirectToRoute} from "../../store/action";
import {AppRoutes} from "../../consts/appRoutes";


type AddToListButtonProps = {
  id: string;
};


export function AddToListButton({id}: AddToListButtonProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const favoriteFilmsCnt = useAppSelector((state) => state.favoriteFilms.length);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (authStatus !== AuthorizationStatus.Auth){
      dispatch(redirectToRoute(AppRoutes.Login));
    }
    dispatch(addFilmToFavorites(id));
  };

  return(
    <button className="btn btn--play film-card__button" type="button" onClick={handleSubmit}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      {authStatus === AuthorizationStatus.Auth && (<span className="film-card__count">{favoriteFilmsCnt}</span>)}
    </button>
  );
}
