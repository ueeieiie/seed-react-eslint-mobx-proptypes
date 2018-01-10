// Dependencies
import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

// Components
import TestComponent from './TestComponent';

// App Component
@inject('dummieStore')
@observer
export default class App extends React.Component {
	render() {
		return (
			<div>
				<TestComponent test={this.props.dummieStore} />
			</div>
		);
	}
}

/* wrappedComponent is necessary here because its wrapper's 'native name' 
Every component that is being wrapped with @inject will be wrapped with wrappedComponent
docs here: https://github.com/mobxjs/mobx-react#provider-and-inject */
App.wrappedComponent.propTypes = {
	dummieStore: PropTypes.any.isRequired
};
