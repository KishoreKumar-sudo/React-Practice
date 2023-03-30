import React from 'react';
import ReactDOM from 'react-dom/client';
//1st we need to import provider which will actually provide the redux store to our react application ("react-redux package" which is a connection of a react and redux)
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store'
// import { createStore, applyMiddleware } from 'redux'

// const applyMiddleWare = store => next => action => {
//   console.log("Middleware triggered:", action);
//   next(action);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


