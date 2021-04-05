import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'

function Routes() {
	return (
		<Switch>
			<Route path='/'>
				<Main />
			</Route>
		</Switch>
	)
}

export default Routes
