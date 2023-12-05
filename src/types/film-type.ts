import {Rating} from '../consts/ratings';
import {Genre} from '../consts/genres';

export type Film = {
  id: number;
  name: string;
  filmImg: string;
  runTime: string;
  genre: Genre;
  director: string;
  starring: string;
  releaseYear: number;
  filmDesc: string;
  ratingLevel: Rating;
  ratingScore: number;
  videoLink: string;
};
