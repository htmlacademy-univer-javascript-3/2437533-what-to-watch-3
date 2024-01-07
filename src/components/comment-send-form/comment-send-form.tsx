import {ChangeEventHandler, FormEvent, JSX} from 'react';
import { useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {addReviewAction} from '../../store/api-actions';


type CommentSendFormProps = {
  onAnswer: (rating: number) => void;
};

export function CommentSendForm({ onAnswer }: CommentSendFormProps): JSX.Element {
  const [userScore, setUserScore] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.currentFilm?.id) || '1';
  const isInputValid = () => comment.trim().length >= 50 && userScore !== 0 && !isSubmitting;


  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setComment(evt.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    dispatch(addReviewAction({comment: comment, rating: userScore, id: id}));
    setIsSubmitting(false);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          onAnswer(userScore);
        }}
      >
        <div className="rating">
          <div className="rating__stars">
            {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
              <>
                <input
                  className="rating__input"
                  id={`star-${num}`}
                  type="radio"
                  name="rating"
                  value={`${num}`}
                  onChange={() => {
                    setUserScore(num);
                  }}
                />
                <label className="rating__label" htmlFor={`star-${num}`}>
                  Rating {num}
                </label>
              </>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text" minLength={50} maxLength={400} onChange={handleCommentChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" disabled={!isInputValid()} type="submit" onClick={handleSubmit}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
