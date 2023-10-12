import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/stylependu.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
