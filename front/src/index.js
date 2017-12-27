import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from 'reducers'
import {
    BrowserRouter as Router
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const initState = {
    status: 'INIT'
}
const store = createStore(reducer, initState)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />    
        </Router>  
    </Provider>            
, document.getElementById('root'));
registerServiceWorker();
