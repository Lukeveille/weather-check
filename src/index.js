import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/city:*" component={App}/>
        <Route path="/*" component={App}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
