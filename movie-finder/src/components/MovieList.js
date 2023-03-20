import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  const objectArray = Object.values(props.movies);
  return (
    <div className='container'>
      <div className='row'>
        {objectArray.map((movie, i) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              img={movie.poster_path}
              id={movie.id}
              viewMovieInfo={props.viewMovieInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
