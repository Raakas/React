import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer'
import rootReducer2 from './reducer/rootReducer2'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
   rootReducer,
   rootReducer2,
});


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
