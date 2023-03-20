import React from 'react';

const SearchArea = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s3 offset-s2'>
          <form action='' onSubmit={props.handleSubmit}>
            <div className='input-field'>
              <input
                placeholder='search movie'
                id='search'
                type='text'
                onChange={props.handleChange}
              ></input>
              <label htmlFor='search'></label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
