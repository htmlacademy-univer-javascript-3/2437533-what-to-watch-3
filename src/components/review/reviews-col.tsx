import {JSX} from 'react';
import {ReviewType} from '../../types/review-type';
import {Review} from './review';

type ReviewsColProps = {
  reviews: ReviewType[];
}


export function ReviewsCol({reviews}: ReviewsColProps): JSX.Element {

  return (
    <div className="film-card__reviews-col">
      {
        reviews.map((r) => (
          // eslint-disable-next-line react/jsx-key
          <Review review={r}/>)
        )
      }
    </div>
  );
}
