// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

// Stores
import { dummieStore } from './stores/dummie.store';

// Components
import App from './components/App';

// App Location
const appLocation = document.querySelector('.app');

ReactDOM.render(
	<Provider dummieStore={dummieStore}>
		<App />
	</Provider>, 
	appLocation
);
