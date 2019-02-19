import React from 'react';
import { connect } from 'react-redux';

let Temperature = ({ temp, city, name = null }) => (
  <div>
    <h1>
      {temp? 'In ' + name? name : city : temp + ' degrees Celsius'}
    </h1>
  </div>
)

const mapStateToProps = (state) => ({
  temp: state.reducer.temp,
  city: state.reducer.cityName
});

Temperature = connect(mapStateToProps, null)(Temperature);

export default Temperature;