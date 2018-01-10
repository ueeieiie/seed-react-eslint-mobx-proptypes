import React from 'react';
import PropTypes from 'prop-types';

const TestComponent = (props) => (
	<div>
		prop text: {props.test.x}
	</div>
);


export default TestComponent;

TestComponent.propTypes = {
	test: PropTypes.any.isRequired
};
