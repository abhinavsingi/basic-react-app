import React, {Component, PropTypes} from 'react';

class App extends Component {
	static displayName = 'App';

	static PropTypes = {
		name: PropTypes.string
	}

	render(){
		return (
			<div>
				{this.props.name}
			</div>
		);
	}
}

export default App;
