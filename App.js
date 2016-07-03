import React from 'React';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		// this.state = { val: 0 };
        this.state = {increasing: false}
		this.update = this.update.bind(this);
	}
	update(){
	this.setState({val: this.state.val + 1})
}
componentWillRecieveProps(nextProps){
    this.setState({increasing:nextProps.val > this.props.val })
}
shouldComponentUpdate(nextProps,nextState) {
    return nextProps.val % 5  === 0;
}
// componentWillMount(){
// 	console.log('mountingNow')
// }
render(){
	console.log('this state is increasing')
	return <button onClick={this.update}>{this.state.val}</button>
}
	componentDidMount(){
		console.log('mounted')
	}
}
export default App
