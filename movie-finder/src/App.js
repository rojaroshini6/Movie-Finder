import React, { useState } from 'react';
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import MovieInfo from './components/MovieInfo';

const App = (props) => {
  const initialState = {
    movies: [],
    searchTerm: '',
    totalPage: 0,
    currentPage: 1,
    currentMovie: null,
  };

  const [formData, setFormData] = useState(initialState);

  const apiKey = '4f5890e24c242acfabd0a04dc0e2582b';

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${formData.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        setFormData({
          ...formData,
          movies: { ...data.results },
          totalPage: data.total_results,
        });
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, searchTerm: e.target.value });
  };

  const nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${formData.searchTerm}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        setFormData({
          ...formData,
          movies: { ...data.results },
          currentPage: pageNumber,
        });
      });
  };

  const viewMovieInfo = (id) => {
    const objectArray = Object.values(formData.movies);
    const filteredMovie = objectArray.filter((movie) => movie.id === id);
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    setFormData({ ...formData, currentMovie: newCurrentMovie });
  };

  const closeMovieInfo = () => {
    setFormData({ ...formData, currentMovie: null });
  };

  const numberOfPages = Math.floor(formData.totalPage / 20);
  return (
    <div className='App'>
      <Nav />
      {formData.currentMovie == null ? (
        <div>
          <SearchArea handleSubmit={handleSubmit} handleChange={handleChange} />
          <MovieList movies={formData.movies} viewMovieInfo={viewMovieInfo} />
          {formData.totalPage > 20 ? (
            <Pagination
              numberOfPages={numberOfPages}
              currentPage={formData.currentPage}
              nextPage={nextPage}
            />
          ) : (
            ''
          )}
        </div>
      ) : (
        <MovieInfo
          currentMovie={formData.currentMovie}
          closeMovieInfo={closeMovieInfo}
        />
      )}
    </div>
  );
};

export default App;
