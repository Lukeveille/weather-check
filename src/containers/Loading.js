import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/Loading.css';

let Loading = ({loading}) => (
  loading? <img src={logo} className="Loading-icon" alt="logo" /> : null
)

const mapStateToProps = (state) => ({
  loading: state.reducer.loading
});

Loading = connect(mapStateToProps, null)(Loading)

export default Loading;