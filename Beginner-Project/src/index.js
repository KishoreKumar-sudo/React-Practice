import React from 'react';
import ReactDOM from 'react-dom/client';
//1st we need to import provider which will actually provide the redux store to our react application ("react-redux package" which is a connection of a react and redux)
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


