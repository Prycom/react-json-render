import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  jsonLayout: {

  },
  editableElement: {

  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_LAYOUT":
      return state['jsonLayout']
    case "SET_LAYOUT":
      return {...state, 'jsonLayout': action.payload}
    case "GET_EDITABLE":
      return state['editableElement']
    case "SET_EDITABLE":
      return {...state, 'editableElement': action.payload}
    default:
      return state;
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
