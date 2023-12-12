import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../consts/authorization';
import {AppRoutes} from '../../consts/appRoutes';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return authStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.Login} />;
}
