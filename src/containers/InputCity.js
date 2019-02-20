import React from 'react';
import { connect } from 'react-redux';
import { setCityName } from '../actions';
import '../styles/InputCity.css';

let InputCity = ({ setCityName }) => (
  <div>
    <input className="InputCity"
      onChange={(evt) => {
        setCityName(evt.target.value);
      }}
      type="text"
      placeholder="Enter city name or get temp in Toronto"
    />
  </div>
);

const mapDispatchToProps = { setCityName };

InputCity = connect(null, mapDispatchToProps)(InputCity);

export default InputCity;