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
          <Review key={r.id} review={r}/>
        ))
      }
    </div>
  );
}
