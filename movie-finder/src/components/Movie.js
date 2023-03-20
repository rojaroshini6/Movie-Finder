import React from 'react';
import AltImg from '../images/movie_alt.jpeg';

const Movie = (props) => {
  return (
    <div className='col s2 m6 l3'>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          {props.img == null ? (
            <img
              className='activator'
              src={AltImg}
              alt='card'
              style={{ width: '100%', height: '400px' }}
            />
          ) : (
            <img
              className='activator'
              src={`http://image.tmdb.org/t/p//w185${props.img}`}
              alt='card'
              style={{ width: '100%', height: '400px' }}
            />
          )}
          <div className='card-content'>
            <a href='#' onClick={() => props.viewMovieInfo(props.id)}>
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
