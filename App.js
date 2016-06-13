import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render(){
		let txt = this.props.txt
		return <h1>{txt}</h1>
		// return <div> 
	 //     <h1> Hello Universe
		//       	</h1>
		// 	  </div>
	}
}	

ReactDOM.render(
	<App txt = "this is the props txt" />,
	document.getElementById('app')
);



