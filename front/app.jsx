import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

//Components 
import Maps from './map.jsx';

const App = React.createClass({
	render(){
		return(
			<div>
			<center><h1>Food Hunt</h1></center>
			{this.props.children}
			</div>
		)
	}
})

ReactDOM.render(
<Router history={customHistory}>
	<Route exact={true}path="/" component={App}>
		<Route path="/map" component={Maps}/>
	</Route>
</Router>,
document.getElementById('root')
)

