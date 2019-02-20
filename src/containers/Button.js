import React from 'react';
import { connect } from 'react-redux';
import { getTemp } from '../actions';
import '../styles/Button.css';

let Button = ({ name, getTemp }) => (
  <button className="Button"
    onClick={() => getTemp(name)}
  >Get temperature</button>
);

const mapStateToProps = (state) => (
  { name: state.reducer.cityName }
)
const mapDispatchToProps = {
  getTemp,
};

Button = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default Button;