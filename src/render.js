import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost } from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.getElementById('root'));
};
