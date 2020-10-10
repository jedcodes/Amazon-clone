import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {StateProvider} from './Context/StateProvider'
import reducer, {initialState} from './Context/reducer'

ReactDOM.render(
  <Router>
  <StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>
  </Router>,
  document.getElementById('root')
);