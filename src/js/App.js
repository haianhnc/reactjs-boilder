import logo from '../logo.svg';
import '../css/App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Dummy from './containers/Dummy';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="app">
            <Route exact path="/" component={Dummy} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
