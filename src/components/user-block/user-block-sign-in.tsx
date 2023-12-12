import {useAppDispatch} from '../../hooks';
import {redirectToRoute} from '../../store/action';
import {AppRoutes} from '../../consts/appRoutes';

export function UserBlockSignIn(): JSX.Element {
  const dispatch = useAppDispatch();

  return(
    <li className="user-block__item" onClick={(evt) => {
      evt.preventDefault();
      dispatch(redirectToRoute(AppRoutes.Login));
    }}
    >
      <a className="user-block__link">Sign in</a>
    </li>
  );
}
