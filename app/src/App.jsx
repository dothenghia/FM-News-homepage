import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App = () => {
	return (
		<div className="app">
			<div className="container">
				<Header/>
				<Content/>
			</div>
		</div>
	)
}

export default App