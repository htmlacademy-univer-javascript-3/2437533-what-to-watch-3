import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to={'/login'} />;
}
