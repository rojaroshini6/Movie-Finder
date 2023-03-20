import React from 'react';
import AltImg from '../images/movie_alt.jpeg';

const MovieInfo = (props) => {
  console.log(props);
  return (
    <div className='container'>
      <div
        className='row'
        onClick={props.closeMovieInfo}
        style={{ cursor: 'pointer', paddingTop: 50 }}
      >
        <i className='fa fa-arrow-left'></i>
        <span style={{ marginLeft: 10 }}>Go back</span>
      </div>
      <div className='row'>
        <div className='col s12 m3'>
          {props.currentMovie.poster_path == null ? (
            <img
              className='activator'
              src={AltImg}
              alt='card'
              style={{ width: '200px', height: '200px' }}
            />
          ) : (
            <img
              className='activator'
              src={`http://image.tmdb.org/t/p//w185${props.currentMovie.poster_path}`}
              alt='card'
              style={{ width: '200px', height: '200px' }}
            />
          )}
        </div>
        <div className='col s12 m8'>
          <div className='info-container'>
            <p> {props.currentMovie.title}</p>
            <p>
              {' '}
              {props.currentMovie.release_date
                .substring(5)
                .split('-')
                .concat(props.currentMovie.release_date.substring(0, 4))
                .join('/')}
            </p>
            <p> {props.currentMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
