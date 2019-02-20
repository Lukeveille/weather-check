import React from 'react';
import Loading from '../containers/Loading';
import InputCity from '../containers/InputCity';
import Temperature from '../containers/Temperature';
import Button from '../containers/Button';
import { connect } from 'react-redux';
import '../styles/App.css';

let App = ({ callDone, cityName, getByUrl }) => {
  if (cityName && !callDone) {
    getByUrl(cityName);
  }
  return (
    <div>
      <InputCity />
      <Button />
      <Loading />
      <Temperature name={cityName} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  cityName: ownProps.match.params[0],
  callDone: state.reducer.callDone
});

const mapDispatchToProps = dispatch => ({
  getByUrl: name => { dispatch({type: 'GET_TEMP', name})}
})

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
