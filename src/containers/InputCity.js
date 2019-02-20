import React from 'react';
import { connect } from 'react-redux';
import { setCityName } from '../actions';
import '../styles/ImportCity.css';

const SearchField = ({ setCityName }) => (
  <div>
    <input className="ImportCity"
      onChange={(evt) => {
        setCityName(evt.target.value);
      }}
      type="text"
      placeholder="Enter city name or get temp in Toronto"
    />
  </div>
);

const mapDispatchToProps = { setCityName };
const Search = connect(null, mapDispatchToProps)(SearchField);

export default Search;