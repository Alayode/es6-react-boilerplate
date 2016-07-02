import React from 'React';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state = { val: 0 };
		this.update = this.update.bind(this);
	}
	update(){
	this.setState({val: this.state.val + 1})
}
componentWillMount(){
	console.log('mountingNow')
}
render(){
	console.log('rendering!')
	return <button onClick={this.update}>{this.state.val}</button>
}
	componentDidMount(){
		console.log('mounted')
	}
}
export default App
