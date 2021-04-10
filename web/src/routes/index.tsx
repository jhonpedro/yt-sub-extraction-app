import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../pages/About'
import Main from '../pages/Main'

function Routes() {
	return (
		<Switch>
			<Route path='/' exact>
				<Main />
			</Route>
			<Route path='/about'>
				<About />
			</Route>
		</Switch>
	)
}

export default Routes
