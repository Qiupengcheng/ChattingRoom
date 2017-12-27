import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import middlewares from './middleware';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import App from './App';
import reducers from './redux/reducers';
import rem from './utils/rem';


const store = createStore(reducers,
	applyMiddleware(middlewares.apiMiddleware, middlewares.thunkMiddleware)
);

// rem适配方案
rem();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}/>
		</Router>
	</Provider>
, document.getElementById('app'));