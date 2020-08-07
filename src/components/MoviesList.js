import React from 'react';
import { Link } from 'react-router-dom';

// the movies prop has been passed from App to MoviesPage, then again to MoviesList
const MoviesList = ({ movies }) => {
  // The movies prop is an object containing each movie.
  // To iterate over this object, we'll use Object.keys(movies) to get an array of keys, then map over this array
  const renderMovies = Object.keys(movies).map(movieID =>
    // Since the keys in the object are also the id values for each movie,
    // the elements in .map() are referred to as movieID
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;

