import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
//state is a collection of values
	constructor(){
// 		//initially call super
		super();
		this.state = { 
				txt: 'this is the state txt'
// 				cat: '0'
		}
}
	update(e){
		this.setState({txt: e.target.value})
	}
	render(){
		// let txt = this.props.txt
		// return <h1>{this.state.txt}</h1>
		return (
			<div>
			<input type = "text" 
				onChange={this.update.bind(this)} />
				<h1>{this.state.txt}</h1>
			</div>
			);

		// return (	<h1>Hi</h1> )
				// <div>
				   
						// <b>Bold</b>
				// </div>
	}
}

App.propTypes = {
	txt : React.PropTypes.string,
	cat : React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is the default txt'
}

ReactDOM.render(
	<App cat={5}  />,
	document.getElementById('app')
	);
// export default App