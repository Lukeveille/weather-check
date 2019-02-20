import React from 'react';
import Loading from '../containers/Loading';
import InputCity from '../containers/InputCity';
import Temperature from '../containers/Temperature';
import Button from '../containers/Button';
import { connect } from 'react-redux';
import { getTemp } from '../actions';
import '../styles/App.css';

let App = ({ callDone, id, getByUrl }) => {
  if (id && !callDone) {
    getByUrl(id);
  };
  return (
    <div className="App-header">
      <InputCity />
      <Button />
      <Loading />
      <Temperature name={id} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params[0],
  callDone: state.reducer.callDone
});

const mapDispatchToProps = dispatch => ({
  getByUrl: (name) => { dispatch(getTemp(name))}
});

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
