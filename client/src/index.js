import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'


// Redux init
const store = createStore(reducers, compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();




// Remember, this is the place that we are going to initial redux