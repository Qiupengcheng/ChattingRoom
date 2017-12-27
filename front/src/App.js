import React from 'react';
import Todos from './views/todos/index';

// 加载所有样式文件
// import "./static/style/index.less";
import "./static/style/todos.less";

const App = (props) => {
	return (
		<div>

			<Todos></Todos>
		</div>
	)
};

	
export default App;