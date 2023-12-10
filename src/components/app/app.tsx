import {MainPage} from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SingInPage} from '../../pages/sing-in-pages/sing-in-page/sing-in-page';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {MyListPage} from '../../pages/my-list-page/my-list-page';
import {MoviePage} from '../../pages/movie-pages/movie-page/movie-page';
import {MovieReviewsPage} from '../../pages/movie-pages/movie-reviews-page/movie-reviews-page';
import {PlayerPage} from '../../pages/player-pages/player-page/player-page';
import {PrivateRoute} from '../private-route/private-route';
import {AppRoutes} from '../../consts/appRoutes';
import {MovieDetailsPage} from '../../pages/movie-pages/movie-details-page/movie-details-page';
import {AddReviewPage} from '../../pages/add-review-page/add-review-page';
import {useAppSelector} from '../../hooks';
import {LoadingScreen} from '../../pages/loading-screen/loading-screen';


export function App() {
  const isLoading = useAppSelector((state) => state.isFilmDataLoading);

  if (isLoading) {
    return (
      <LoadingScreen></LoadingScreen>
    );
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main}>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.Login} element={<SingInPage />} />
          <Route path={AppRoutes.MyList} element={
            <PrivateRoute >
              <MyListPage />
            </PrivateRoute >
          }
          />
          <Route path={AppRoutes.Films} element={<MoviePage />} />
          <Route path={AppRoutes.Reviews} element={<MovieReviewsPage />} />
          <Route path={AppRoutes.Details} element={<MovieDetailsPage />} />
          <Route path={AppRoutes.Player} element={<PlayerPage />} />
          <Route path={AppRoutes.AddReview} element={<AddReviewPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>);
}
