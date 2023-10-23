import {MainPage} from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SingInPage} from '../../pages/sing-in-page/sing-in-page';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page';
import {MyListPage} from '../../pages/my-list-page/my-list-page';
import {MoviePage} from '../../pages/movie-page/movie-page';
import {MovieReviewsPage} from '../../pages/movie-reviews-page/movie-reviews-page';
import {PlayerPage} from '../../pages/player-page/player-page';
import {PrivateRoute} from '../private-route/private-route';

export type AppProps = {
  name: string;
  genre: string;
  trailerDateRelease: number;

}

export function App({name, genre, trailerDateRelease}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainPage name={name} genre={genre} trailerDateRelease={trailerDateRelease}/>} />
          <Route path='login' element={<SingInPage />} />
          <Route path='mylist' element={
            <PrivateRoute >
              <MyListPage />
            </PrivateRoute >
          }
          />
          <Route path='films/:id' element={<MoviePage />} />
          <Route path='films/:id/review' element={<MovieReviewsPage />} />
          <Route path='player/:id' element={<PlayerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>);
}
